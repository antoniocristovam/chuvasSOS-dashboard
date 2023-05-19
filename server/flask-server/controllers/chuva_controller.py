from services import chuva_service
from flask import make_response, jsonify


def get_chuva():
    try:
        response = chuva_service.get_all_rainfall_index('2611606')
        return make_response(jsonify(response))
    except Exception as e:
        print(e)

def send_notification(data):
    try:
        chuva_service.send_notification(data)
        response =  make_response(jsonify({"status": "success"}))
        return response
    except Exception as e:
        print(e)