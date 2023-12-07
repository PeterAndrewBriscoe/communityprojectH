from openai import OpenAI
import os

from os import path
from os.path import join, dirname
from dotenv import load_dotenv

dotenv_path = join(dirname(__file__), 'OPENAI_API_KEY')
load_dotenv(dotenv_path)

OPENAI_API_KEY = os.environ.get("OPENAI_API_KEY")

client = OpenAI(api_key=OPENAI_API_KEY)

print("OpenAI connection successfull")

# completion = client.chat.completions.create(
#   model="gpt-3.5-turbo",
#   messages=[
#     {"role": "system", "content": "You are a poetic assistant, skilled in explaining complex programming concepts with creative flair."},
#     {"role": "user", "content": "Compose a poem that explains the concept of recursion in programming."}
#   ]
# )

# print("Loading...")

# print(completion.choices[0].message)