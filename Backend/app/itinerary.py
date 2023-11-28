from flask import Flask, Blueprint, request, json
from ..OpenAI.main import createItinerary

itinerary = Blueprint('itinerary', __name__) 

@itinerary.route("/itinerary")
def default():
    return "itinerary"

@itinerary.route("/itinerary_form", methods=['GET', 'POST'])
def get_itinerary():
    try:
        request_data = json.loads(request.data)

        if request.method == 'POST':
            People = "Three friends and I"
            When = "20/1/2024"
            To_Note = "We love visiting cultural sites"

            default_question = "I want you to act as a travel planner. I will provide you specific details about my trip, where I'm going, when I'm going, who I'm going with, and important things to note. You will provide a specific itinerary with the vacation plan. My trip: " 
            + "Where I'm going: " + request_data['travelTo'] 
            + "When I'm going: " + request_data['leaveDate'] 
            + "Who is going: " + request_data['people'] 
            + "Important things to note: " + request_data['toNote'] 

        # retrieve item from frontend by request_data['ID']
        print(request_data['travelTo'])

        # need to connect opeanai 

        return {200: "works"}

    except:
        return {404: 'Failed to retreive itinerary data'}

    # return "itinerary"
