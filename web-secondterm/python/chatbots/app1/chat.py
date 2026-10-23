from google import genai


userinput = "Who won last cricket match?"
api_key = 'your api key will be here'
client = genai.Client(api_key=api_key)

response = client.models.generate_content(
    model='gemini-3.8-flash',
    contents=userinput
)

print("You: {userinput}")
print("AI: ", response)