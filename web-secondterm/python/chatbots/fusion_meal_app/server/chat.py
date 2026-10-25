from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from google import genai
from google.genai import types
from knowledge_base import COMPANY_DETAILS

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/chat")
async def chatbot(request: Request):
    data = await request.json()
    question = data["msg"]

    api_key = "AQ.Ab8RN6Ll50HBm_LcHJgth3nZG-AlfjbIC3pMqLk8LYj1qmN1mQ"

    client = genai.Client(api_key=api_key)

    SYSTEM_PROMPT = f"""
    You are professional AI assistant
    Give proper answer to questions about our company details.

    company details:
    {COMPANY_DETAILS}

    Rules:
    - If company don't have related details just say: "I don't have information about this"
    """

    response = client.models.generate_content(
        model="gemini-3.6-flash",
        contents=question,
        config=types.GenerateContentConfig(
            system_instruction=SYSTEM_PROMPT
        )
    )

    return {
        "status": True,
        "reply": response.text
    }
    
    