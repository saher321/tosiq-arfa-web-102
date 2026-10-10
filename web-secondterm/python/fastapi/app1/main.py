from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

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

product_categories = [
    {"id": 1, "name": "Clothing"},
    {"id": 2, "name": "Food"},
    {"id": 3, "name": "Wearing"},
]

@app.get("/products/categories")
def p_categories():
    return {
        "status": True,
        "catgories": product_categories
    }

@app.get("/welcome")
def greetings():
    return {"msg": "Hello to FastApi"}

@app.post("/users")
def greetings():
    return {"msg": "User list"}

@app.get("/users/{user_id}")
def greetings():
    return {"msg": "User detail"}

@app.delete("/welcome/{user_id}")
def greetings():
    return {"msg": "User has been deleted"}

@app.put("/welcome")
def greetings():
    return {"msg": "User has been updated"}
