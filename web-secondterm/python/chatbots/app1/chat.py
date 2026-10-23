from google import genai


userinput = "Who is the president of UK?"

client = genai.Client(api_key='AQ.Ab8RN6IEQtv1J14gvkT6VCuFpdMW04Qc_tbKHhn0z7z16TciYQ')

response = client.models.generate_content(
    model='gemini-3.8-flash',
    contents=userinput
)

print("You: {userinput}")
print("AI: ", response)