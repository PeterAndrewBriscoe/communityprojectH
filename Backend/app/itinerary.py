from flask import Flask, Blueprint, request, json
from flask_cors import CORS
from .OpenAI_API.main import createItinerary

## note2self: remember to change to python ver 9 or open ai wont work!!!


itinerary = Blueprint('itinerary', __name__) 
CORS(itinerary)

@itinerary.route("/itinerary")
def default():
    return "itinerary"

@itinerary.route("/itinerary_form", methods=['GET', 'POST'])
def get_itinerary():
    request_data = json.loads(request.data)

    if request.method == 'POST':
        travel_to = request_data['travelTo'] 
        people = str(request_data['people'])
        leave_date = request_data['leaveDate'] 
        to_note = request_data['toNote'] 

        default_question = "I want you to act as a travel planner. I will provide you specific details about my trip, where I'm going, when I'm going, who I'm going with, and important things to note. You will provide a specific itinerary with the vacation plan. My trip: " + "Where I'm going: " + travel_to + ". When I'm going: " + leave_date + ". Who is going: " + people + ". Important things to note: " + to_note +"."

        output = createItinerary(default_question)
        # print(output)

        return {200: output}
    
    return {200: "get_itinerary == works"}
