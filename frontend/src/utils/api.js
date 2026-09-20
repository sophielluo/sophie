// Base URL for the portfolio backend.
// Set REACT_APP_API_URL in the deployment environment (e.g. Vercel);
// falls back to the local FastAPI server for development.
const API_BASE_URL = (
  process.env.REACT_APP_API_URL || 'http://localhost:8000'
).replace(/\/+$/, '');

export default API_BASE_URL;
