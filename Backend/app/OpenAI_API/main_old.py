# from openai import OpenAI
# import os

# client = OpenAI(
#   api_key = os.environ.get("API_KEY.env"),
# )

import openai
import os
import configparser

config = configparser.ConfigParser()
config.read('API_KEY')

API_KEY = config.get('default', 'API_KEY')

# os.chdir(r'C:/Users/anahx/Documents/WebDev/React/communityprojectH/Backend/app/OpenAI_API')
# API_KEY = open(r"C:\Backend\app\OpenAI_API\API_KEY", "r").read()
openai.api_key = API_KEY

def createItinerary(user_input):
    print("-----createItinerary")

    # chat_log = if we are to enable users to edit existing output
    chat_log = []
    chat_log.append({"role": "user", "content": user_input})

    print(user_input)

    response = openai.chat.completions.create(
        model = "gpt-3.5-turbo",
        messages = chat_log
    )   

    print('Awaiting assustant response...')

    # look at the output; this outputs only the message content
    assistant_response = response.choices[0].message

    # add the AIs response to chat log
    chat_log.append({"role": "assistant", "content": assistant_response})

    print("ChatGPT: ", assistant_response)

    # error 500 when returned -TypeError: Object of type ChatCompletionMessage is not JSON serializable
    # need to convert to json?
    # return ("ChatGPT: ", assistant_response)