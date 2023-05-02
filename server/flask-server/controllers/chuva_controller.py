from services import chuva_service
from flask import make_response, jsonify


def get_chuva():
    try:
        response = chuva_service.get_all_rainfall_index('2611606')
        return make_response(jsonify(response.to_dict()))
    except Exception as e:
        print(e)
