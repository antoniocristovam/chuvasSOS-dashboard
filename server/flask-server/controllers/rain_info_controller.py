from services import rain_info_service
from flask import abort, make_response, jsonify


def get_rainfall_informations():
    try:
        response = rain_info_service.get_all_rainfall_index('2611606')
        return make_response(jsonify(response))
    except Exception as e:
        abort(500)