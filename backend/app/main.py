from flask import Flask, session, request, json, jsonify
from markupsafe import escape
from dotenv import load_dotenv
from os import getenv
from requests import Session as rSession
from handler.handler import Server

load_dotenv()


app = Flask(__name__)
app.secret_key = bytes(getenv("SECRETKEY").encode("utf-8"))
reqHandler = Server(rSession())

@app.route('/login', methods=['POST', 'GET'])
def index():
    if request.json:
        if request.json["username"] in session:
                return {"status": 200, "user": escape(session["username"][0])}
        else:
            res = reqHandler.login(request.json["username"], request.json["password"])
            if res["status_login"]:
                session["username"] = request.json["username"]

            return jsonify(res)
    print("d")
    return {"help": 2}

if __name__ == "__main__":
    app.run(threaded=True, debug=True)
