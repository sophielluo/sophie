import { Cloudinary } from '@cloudinary/url-gen';

// Create a Cloudinary instance using environment variables
const cld = new Cloudinary({
  cloud: {
    cloudName: process.env.REACT_APP_CLOUDINARY_CLOUD_NAME
  },
  url: {
    secure: true // Force HTTPS
  }
});

export default cld;