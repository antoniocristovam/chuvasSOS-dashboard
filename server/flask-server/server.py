from flask import Flask, request
from flask_cors import CORS, cross_origin
from controllers import rain_info_controller, notification_controller, shelter_controller
from services import db_service
import firebase_admin
from firebase_admin import credentials

# Inicializando banco
db_service.init()

# Inicializando projeto no firebase para envio de notificações
firebase_cred = credentials.Certificate(
    "/home/guilherme/Projetos/chuvasSOS-dashboard/credentials.json")
firebase_app = firebase_admin.initialize_app(firebase_cred)

# Configurando Flask
app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}},
     allow_headers=['Content-Type', 'Authorization'])


# Rotas
@app.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Headers',
                         'Content-Type,Authorization')
    response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
    return response


@app.route("/rain/rainfalls", methods=["GET"])
def rainfalls():
    return rain_info_controller.get_rainfall_informations()


@app.route("/notification", methods=["GET", "POST"])
def notification():
    if request.method == 'POST':
        return notification_controller.send_notification(request.json)
    if request.method == 'GET':
        return notification_controller.get_all_notifications()


@app.route('/notification/token', methods=['POST'])
def register_token():
    if request.method == 'POST':
        return notification_controller.register_token(request.json)


@app.route('/shelter', methods=['GET', 'POST'])
def shelter():
    if request.method == 'POST':
        return shelter_controller.save_shelter(request.json)
    if request.method == 'GET':
        return shelter_controller.get_all_shelters()


@app.route('/shelter/<id>', methods=['GET', 'PUT', 'DELETE'])
def shelter_with_params(id):
    if request.method == 'GET':
        return shelter_controller.get_shelter_by_id(id)
    if request.method == 'PUT':
        return shelter_controller.edit_shelter(id, request.get_json())
    if request.method == 'DELETE':
        return shelter_controller.delete_shelter(id)


if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0')
