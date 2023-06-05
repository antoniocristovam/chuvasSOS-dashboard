from flask import abort, make_response, jsonify
from models.shelter import Shelter
from models.notification import Notification
from services import db_service


def save_shelter(data):
    try:
        shelter = Shelter(id=None, name=data['name'], address=data['address'], district=data['district'],
                          lat=data['lat'], long=data['long'])
        db_service.save_shelter(shelter)
        response = make_response(jsonify({"status": "success"}))
        return response
    except Exception as e:
        print(e)
        abort(500)


def edit_shelter(id, data):
    try:
        shelter = Shelter(id=id, name=data['name'], address=data['address'], district=data['district'],
                          lat=data['lat'], long=data['long'])
        db_service.update_shelter(shelter)
        response = make_response(jsonify({"status": "success"}))
        return response
    except Exception as e:
        print(e)
        abort(500)


def delete_shelter(id):
    try:
        db_service.delete_shelter(id)
        response = make_response(jsonify({"status": "success"}))
        return response
    except Exception as e:
        print(e)
        abort(500)


def get_all_shelters():
    try:
        sheltersArray = db_service.get_shelters()
        shelters = list(map(lambda value: {
            "id": value[0],
            "name": value[1],
            "address": value[2],
            "district": value[3],
            "lat": value[4],
            "long": value[5]
        }, sheltersArray))
        return make_response(jsonify({"shelters": shelters}))
    except:
        abort(500)


def get_shelter_by_id(id):
    try:
        shelterArray = db_service.get_shelter_by_id(id)
        if shelterArray is not None:
            shelter = {
                "id": shelterArray[0],
                "name": shelterArray[1],
                "address": shelterArray[2],
                "district": shelterArray[3],
                "lat": shelterArray[4],
                "long": shelterArray[5]
            }
            return make_response(jsonify(shelter))
        else:
            return make_response()
    except:
        abort(500)
