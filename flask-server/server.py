from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/chuva")
def chuva():
    return {"chuva" : ["chuva1, chuva2", "chuva3"]}

if __name__ == "__main__":
    app.run(debug=True)