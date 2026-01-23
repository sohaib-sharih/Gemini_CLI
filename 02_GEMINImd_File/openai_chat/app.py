from openai import OpenAI
import os
import chainlit as cl

client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"), organization=None)

"""
response = client.responses.create(
  model="gpt-4.1",
  input="Tell me a three sentence bedtime story about a unicorn."
)

print(response)
"""
# This function runs every time the user sends a message in the UI
@cl.on_message
async def main(message: cl.Message):

    # Call OpenAI Responses API (text model)
    response = client.responses.create(
        model="gpt-4.1",
        input=message.content
    )

    # Extract plain text from the response
    output_text = response.output_text

    # Send the response back to the Chainlit chat UI
    await cl.Message(content=output_text).send()