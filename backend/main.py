"""
CoPrivat Backend API
FastAPI backend voor email verzending van formulieren
"""

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
from typing import Optional
import logging
from datetime import datetime
import os
from dotenv import load_dotenv

# Import email service
from services.email_service import EmailService

# Load environment variables
load_dotenv()

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler('logs/audit.log'),
        logging.StreamHandler()
    ]
)

logger = logging.getLogger(__name__)

# Initialize FastAPI app
app = FastAPI(
    title="CoPrivat API",
    description="Backend API voor CoPrivat email verzending",
    version="1.0.0"
)

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "https://corpivat.nl"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize email service
email_service = EmailService()

# Pydantic models
class WachtlijstSubmission(BaseModel):
    naam: str
    email: EmailStr
    telefoon: Optional[str] = ""
    praktijk: Optional[str] = ""

class ContactSubmission(BaseModel):
    naam: str
    email: EmailStr
    telefoon: Optional[str] = ""
    onderwerp: str
    bericht: str

class EmailResponse(BaseModel):
    success: bool
    message: str

@app.get("/")
async def root():
    """Health check endpoint"""
    return {"message": "CoPrivat API is running", "status": "healthy"}

@app.post("/api/wachtlijst", response_model=EmailResponse)
async def submit_wachtlijst(submission: WachtlijstSubmission):
    """
    Verwerk wachtlijst aanmelding en stuur email
    """
    try:
        logger.info(f"Wachtlijst aanmelding ontvangen van: {submission.email}")
        
        # Stuur email naar admin
        email_sent = await email_service.send_wachtlijst_notification(submission)
        
        if email_sent:
            logger.info(f"Wachtlijst email succesvol verzonden voor: {submission.email}")
            return EmailResponse(
                success=True,
                message="Aanmelding succesvol verwerkt. We nemen contact met u op zodra we starten met de pilot."
            )
        else:
            logger.error(f"Fout bij verzenden wachtlijst email voor: {submission.email}")
            raise HTTPException(status_code=500, detail="Fout bij verzenden email")
            
    except Exception as e:
        logger.error(f"Fout bij verwerken wachtlijst aanmelding: {str(e)}")
        raise HTTPException(status_code=500, detail="Er is een fout opgetreden bij het verwerken van uw aanmelding")

@app.post("/api/contact", response_model=EmailResponse)
async def submit_contact(submission: ContactSubmission):
    """
    Verwerk contact formulier en stuur email
    """
    try:
        logger.info(f"Contact bericht ontvangen van: {submission.email}")
        
        # Stuur email naar admin
        email_sent = await email_service.send_contact_notification(submission)
        
        if email_sent:
            logger.info(f"Contact email succesvol verzonden voor: {submission.email}")
            return EmailResponse(
                success=True,
                message="Bericht succesvol verzonden. We nemen zo snel mogelijk contact met u op."
            )
        else:
            logger.error(f"Fout bij verzenden contact email voor: {submission.email}")
            raise HTTPException(status_code=500, detail="Fout bij verzenden email")
            
    except Exception as e:
        logger.error(f"Fout bij verwerken contact bericht: {str(e)}")
        raise HTTPException(status_code=500, detail="Er is een fout opgetreden bij het verzenden van uw bericht")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
