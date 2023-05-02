from flask import Flask, make_response, jsonify
from flask_cors import CORS
from bd import Carros
import chuvaSOS as ch
from controllers import chuva_controller

app = Flask(__name__)
CORS(app)


@app.route("/chuva", methods=["GET"])
def chuva():
    return chuva_controller.get_chuva()


if __name__ == "__main__":
    app.run(debug=True)
