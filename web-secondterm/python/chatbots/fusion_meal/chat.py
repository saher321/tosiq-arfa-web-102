from google import genai
from google.genai import types
from knowledge_base import COMPANY_DETAILS

api_key = "AQ.Ab8RN6JX-4E6iq-3uPCEHrVdA5uwpYLZ-XD_Osd9CVq9vhPu-g"

client = genai.Client(api_key=api_key)

SYSTEM_PROMPT= F"""
You are professional AI assistant
Give proper answer to questions about our company details.

company details:
{COMPANY_DETAILS}

Rules:
- If company don't have related details just say: "I don't have information about this"
"""


print("\n ********* WELCOME TO FUSION MEAL ******** \n")
print("Type 'exit' to quit.")



while True:
    question = input("You: ")
    if question.lower() == "exit":
        print("Goodbye")
        break

    response = client.models.generate_content(
        model="gemini-3.8-flash",
        contents=question,
        config=types.GenerateContentConfig(
            sys=SYSTEM_PROMPT
        )
    )

    print("Bot:",response.text)