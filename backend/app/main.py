from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os
from datetime import datetime
from dotenv import load_dotenv
from typing import List, Optional, Dict, Any
import cloudinary
import cloudinary.api
import cloudinary.uploader

# Load environment variables from .env file
load_dotenv()

app = FastAPI(title="Portfolio API", version="1.0.0")

# CORS for frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "https://sophielluo.github.io"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure Cloudinary
cloudinary.config(
    cloud_name=os.getenv("CLOUDINARY_CLOUD_NAME"),
    api_key=os.getenv("CLOUDINARY_API_KEY"),
    api_secret=os.getenv("CLOUDINARY_API_SECRET")
)


# Data Models
class ContactForm(BaseModel):
    name: str
    email: EmailStr
    subject: str = ""
    message: str

class ContactResponse(BaseModel):
    success: bool
    message: str

class ImageMetadata(BaseModel):
    id: str
    title: str
    imageId: str
    cloudinaryUrl: str
    alt: str
    category: str
    tags: List[str] = []
    metadata: Dict[str, Any] = {}

class ImagesResponse(BaseModel):
    success: bool
    images: List[ImageMetadata]
    totalCount: int

class CloudinaryFolderResponse(BaseModel):
    success: bool
    images: List[ImageMetadata]
    totalCount: int
    folder: str

# Helper Functions
def format_cloudinary_resource(resource: dict, folder_name: str) -> ImageMetadata:
    """Convert Cloudinary resource to our ImageMetadata format"""
    # Extract filename without extension for title
    title = resource.get('display_name', resource['public_id'].split('/')[-1])
    
    return ImageMetadata(
        id=resource['public_id'],  # Now matches string type
        title=title.replace('_', ' ').replace('-', ' ').title(),
        imageId=resource['public_id'],
        cloudinaryUrl=resource['secure_url'],
        alt=f"{title} - {folder_name}",
        category=folder_name,
        tags=[folder_name],
        metadata={
            'width': resource.get('width'),
            'height': resource.get('height'),
            'format': resource.get('format'),
            'bytes': resource.get('bytes'),
            'created_at': resource.get('created_at'),
            'resource_type': resource.get('resource_type')
        }
    )


# Routes
@app.get("/")
async def root():
    return {"message": "Portfolio API", "status": "running"}

@app.post("/api/contact", response_model=ContactResponse)
async def submit_contact_form(form: ContactForm):
    """Handle contact form submission"""
    try:
        # Send email
        await send_email(form)
        
        return ContactResponse(
            success=True,
            message="Thank you for your message! I'll get back to you soon."
        )
    except Exception as e:
        raise HTTPException(
            status_code=500, 
            detail="Failed to send message. Please try again later."
        )

async def send_email(form: ContactForm):
    """Send contact form email using SMTP"""
    # Email configuration from environment variables
    smtp_host = os.getenv("SMTP_HOST", "smtp.gmail.com")
    smtp_port = int(os.getenv("SMTP_PORT", "587"))
    smtp_user = os.getenv("SMTP_USER")
    smtp_password = os.getenv("SMTP_PASSWORD")
    recipient_email = os.getenv("RECIPIENT_EMAIL")
    
    if not all([smtp_user, smtp_password, recipient_email]):
        raise Exception("Email configuration missing")
    
    # Create email message
    msg = MIMEMultipart() # create an empty email msg
    msg['From'] = smtp_user
    msg['To'] = recipient_email
    msg['Subject'] = f"Contact Form Submission: {form.subject or 'New Message'}"
    
    # Email body
    body = f"""
    New contact form submission:

    Name: {form.name}
    Email: {form.email}
    Subject: {form.subject}

    Message:
    {form.message}

    ---
    Sent at: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}
    """
    
    msg.attach(MIMEText(body, 'plain')) # add the actual message content
    
    # Send email
    with smtplib.SMTP(smtp_host, smtp_port) as server:
        server.starttls()
        server.login(smtp_user, smtp_password)
        server.send_message(msg)

@app.get("/api/images/folder/{folder_name}", response_model=CloudinaryFolderResponse)
async def get_images_from_folder(
    folder_name: str,
    limit: Optional[int] = 50,
    next_cursor: Optional[str] = None
):
    """
    Fetch images from a specific Cloudinary folder
    
    - **folder_name**: The Cloudinary folder name (e.g., 'travel', 'artworks', 'about')
    - **limit**: Maximum number of images to return (default: 50)
    - **next_cursor**: Pagination cursor for next page
    """
    try:
        # Check if Cloudinary is configured
        cloud_name = os.getenv("CLOUDINARY_CLOUD_NAME")
        api_key = os.getenv("CLOUDINARY_API_KEY")
        api_secret = os.getenv("CLOUDINARY_API_SECRET")
        
        if not all([cloud_name, api_key, api_secret]):
            raise HTTPException(
                status_code=500,
                detail="Cloudinary configuration missing. Please check environment variables."
            )
        
        # Fetch resources from Cloudinary folder
        params = {
            'type': 'upload',
            'prefix': f'{folder_name}/',
            'max_results': limit,
            'resource_type': 'image'
        }
        
        if next_cursor:
            params['next_cursor'] = next_cursor
            
        result = cloudinary.api.resources(**params)
        
        # Convert to our format
        images = [
            format_cloudinary_resource(resource, folder_name)
            for resource in result.get('resources', [])
        ]
        
        return CloudinaryFolderResponse(
            success=True,
            images=images,
            totalCount=len(images),
            folder=folder_name
        )
        
    except cloudinary.exceptions.NotFound:
        raise HTTPException(
            status_code=404,
            detail=f"Folder '{folder_name}' not found"
        )
    except HTTPException:
        raise  # Re-raise HTTP exceptions
    except Exception as e:
        print(f"Cloudinary API Error: {str(e)}")  # Debug logging
        raise HTTPException(
            status_code=500,
            detail=f"Failed to fetch images from folder: {str(e)}"
        )

@app.get("/api/images/folders")
async def get_available_folders():
    """Get list of available folders in Cloudinary"""
    try:
        result = cloudinary.api.root_folders()
        folders = [folder['name'] for folder in result.get('folders', [])]
        
        return {
            "success": True,
            "folders": folders
        }
    except Exception as e:
        print(f"Cloudinary Folders Error: {str(e)}")  # Debug logging
        raise HTTPException(
            status_code=500,
            detail=f"Failed to fetch folders: {str(e)}"
        )

@app.get("/api/images", response_model=ImagesResponse)
async def get_images(
    category: Optional[str] = None,
    tag: Optional[str] = None,
    limit: Optional[int] = None,
    offset: int = 0
):
    """
    Get image metadata with optional filtering
    Note: This endpoint now serves as a fallback for cached/static data
    For dynamic folder content, use /api/images/folder/{folder_name}
    """
    # This could be used for cached data or mixed content
    return ImagesResponse(
        success=True,
        images=[],
        totalCount=0
    )

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
