from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional, Literal
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI(title="Nexus Regional Hub API")
api_router = APIRouter(prefix="/api")


# --------------------- Models ---------------------
RequestType = Literal[
    "feasibility_assessment",
    "strategic_partnership",
    "council_working_group",
    "general_enquiry",
]


class PartnershipRequest(BaseModel):
    model_config = ConfigDict(extra="ignore")

    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    full_name: str
    organisation: Optional[str] = None
    role: Optional[str] = None
    email: EmailStr
    phone: Optional[str] = None
    request_type: RequestType
    message: Optional[str] = None
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class PartnershipRequestCreate(BaseModel):
    full_name: str = Field(min_length=2, max_length=120)
    organisation: Optional[str] = Field(default=None, max_length=160)
    role: Optional[str] = Field(default=None, max_length=120)
    email: EmailStr
    phone: Optional[str] = Field(default=None, max_length=40)
    request_type: RequestType
    message: Optional[str] = Field(default=None, max_length=4000)


# --------------------- Routes ---------------------
@api_router.get("/")
async def root():
    return {"service": "Nexus Regional Hub", "status": "live"}


@api_router.get("/health")
async def health():
    return {"status": "ok", "time": datetime.now(timezone.utc).isoformat()}


@api_router.post("/partnership-requests", response_model=PartnershipRequest)
async def create_partnership_request(payload: PartnershipRequestCreate):
    obj = PartnershipRequest(**payload.model_dump())
    doc = obj.model_dump()
    doc["created_at"] = doc["created_at"].isoformat()
    await db.partnership_requests.insert_one(doc)
    return obj


@api_router.get("/partnership-requests", response_model=List[PartnershipRequest])
async def list_partnership_requests():
    items = await db.partnership_requests.find({}, {"_id": 0}).sort("created_at", -1).to_list(1000)
    for it in items:
        if isinstance(it.get("created_at"), str):
            it["created_at"] = datetime.fromisoformat(it["created_at"])
    return items


@api_router.get("/metrics/summary")
async def metrics_summary():
    """Read-only headline numbers powering the live counters on the page."""
    return {
        "construction_jobs_peak": 420,
        "permanent_jobs_year_5": 185,
        "annual_visitor_spend_uplift_aud_m": 38.5,
        "regional_gdp_uplift_aud_m_10yr": 612,
        "members_year_3_target": 24500,
        "veteran_roles_year_5": 62,
    }


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
