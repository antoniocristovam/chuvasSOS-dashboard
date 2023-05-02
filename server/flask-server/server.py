from flask import Flask
from flask_cors import CORS
import requests
from bs4 import BeautifulSoup


app = Flask(__name__)
CORS(app)

@app.route("/chuva")
def chuva():
    return {"chuva": ["Antonio", "Guilherme", "Geyon"]}

if __name__ == "__main__":
    app.run(debug=True)