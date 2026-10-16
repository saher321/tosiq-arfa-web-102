from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from sqlalchemy import text

from config.db import get_db

app = FastAPI()
origins = [
    "http://localhost:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/check-server")
def test_server():
    return {
        "status": True,
        "message": "Server is running"
    }

@app.get("/db_connection")
def db_connection(db: Session = Depends(get_db)):
    result = db.execute(text("select 1")).scalar()
    return {
        "status": result == 1, # True
        "message": "Database is connected"
    }


@app.get("/customers")
def db_connection(db: Session = Depends(get_db)):
    result = db.execute(text("select * from customers")).mappings().all()
    return {
        "status": True,
        "customers": result
    }
