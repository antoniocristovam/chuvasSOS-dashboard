from flask import Flask, request
from flask_cors import CORS, cross_origin
from controllers import chuva_controller
import firebase_admin
from firebase_admin import credentials


firebase_cred = credentials.Certificate("/home/guilherme/Projetos/ChuvaSOS/firebase_settings/credentials.json")

firebase_app = firebase_admin.initialize_app(firebase_cred)

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}}, allow_headers=['Content-Type', 'Authorization'])

@app.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
    response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
    return response

@app.route("/chuva", methods=["GET"])
def chuva():
    return chuva_controller.get_chuva()

@app.route("/notification", methods=["POST"])
def notification():
    data = request.json
    return chuva_controller.send_notification(data)

if __name__ == "__main__":
    app.run(debug=True)
