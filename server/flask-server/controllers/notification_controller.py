from flask import abort, make_response, jsonify
from models.notification import Notification
from services import notification_service, db_service


def register_token(data):
    try:
        token = db_service.get_token_by_token(data['token'])
        if token == None:
            notification_service.subscribe_to_topic(data['token'])
            db_service.save_token(data['token'])

        response = make_response(jsonify({"status": "success"}))
        return response
    except Exception as e:
        print(e)
        abort(500)


def send_notification(data):
    try:
        notification = Notification(
            created_at=None, title=data['title'], message=data['message'], priority=data['priority'])
        notification_service.send_notification(notification)
        db_service.save_notification(notification)
        response = make_response(jsonify({"status": "success"}))
        return response
    except Exception as e:
        print(e)
        abort(500)


def get_all_notifications():
    try:
        notifications = db_service.get_notifications()
        return make_response(jsonify({"notifications": notifications}))
    except:
        abort(500)
