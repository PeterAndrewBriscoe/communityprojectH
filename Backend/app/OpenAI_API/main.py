from openai import OpenAI
import os
from os.path import join, dirname
from dotenv import load_dotenv

dotenv_path = join(dirname(__file__), 'OPENAI_API_KEY')
load_dotenv(dotenv_path)

OPENAI_API_KEY = os.environ.get("OPENAI_API_KEY")
client = OpenAI(api_key=OPENAI_API_KEY)

def createItinerary(user_input):
    print("-----createItinerary")

    # chat_log = if we are to enable users to edit existing output
    chat_log = []
    chat_log.append({"role": "user", "content": user_input})

    # print(user_input)

    response = client.chat.completions.create(
        model = "gpt-3.5-turbo",
        messages = chat_log
    )   

    print('Awaiting assistant response...')

    # look at the output; this outputs only the message content
    assistant_response = response.choices[0].message

    # add the AIs response to chat log
    chat_log.append({"role": "assistant", "content": assistant_response})

    print("ChatGPT: ", assistant_response)

    # error 500 when returned -TypeError: Object of type ChatCompletionMessage is not JSON serializable
    # need to convert to json?
    # return ("ChatGPT: ", assistant_response)

    #what happens if do: return assistant_response