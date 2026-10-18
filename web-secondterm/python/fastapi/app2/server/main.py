from fastapi import FastAPI, Depends, Request
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
def all_customers(db: Session = Depends(get_db)):
    result = db.execute(text("select * from customers")).mappings().all()
    return {
        "status": True,
        "customers": result
    }



@app.post("/customers/add")
async def add_customer(request: Request, db: Session = Depends(get_db)):
    data = await request.json()

    query = "insert into customers (name, email, phone) values (:name, :email, :phone)"
    result = db.execute(text(query), {
        "name": data["name"],
        "email": data["email"],
        "phone": data["phone"],
    })

    db.commit()
    if (result.rowcount > 0):
        return {
            "status": True,
            "message": "Customer has been added"
        }
    else:
        return {
            "status": False,
            "message": "Failed to add customer"
        }

@app.delete("/customers/delete/{customer_id}")
def delete_customer(customer_id, db: Session = Depends(get_db)):
    query = """
    delete from customers where id = :id
    """
    result = db.execute(text(query), {"id": customer_id})
    
    db.commit()
    
    if result.rowcount == 0:
        return {
            "status": False,
            "message": "No records were found!"
        }
    else:
        return {
            "status": True,
            "message": "Customer has been deleted",
            "customers": all_customers(db)["customers"]
        }

@app.get("/customers/edit/{customer_id}")
def single_customer(customer_id, db: Session = Depends(get_db)):
    query = """
    select id, name, email, phone from customers where id=:id
    """
    result = db.execute(text(query), {"id": customer_id}).mappings().first()
    # print(result)
    return {
        "status": True,
        "customer": result
    }

@app.put("/customers/update")
async def update_customer(request: Request, db : Session = Depends(get_db)):
    data = await request.json()
    query = """
    update customers set name = :name, email = :email, phone = :phone where id = :id
    """
    result = db.execute(text(query), {
        "id": data["id"],
        "name": data["name"],
        "email": data["email"],
        "phone": data["phone"],
    })

    db.commit()

    if result.rowcount == 0:
        return {
            "status": False,
            "message": "Failed to update"
        }
    else:
        return {
            "status": True,
            "message": "Customer has been udpated!"
        }

# fetch : select email from customers where email = data["email"]
# insert: insert into customers (field name) values (organic values)
# delete: delete from customers where fieldname = value
# update: update customers set name=value