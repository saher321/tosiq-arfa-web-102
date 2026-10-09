from fastapi import FastAPI

app = FastAPI()

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
