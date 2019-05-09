from flask import Flask
from flask_restful import Api
from flask_sqlalchemy import SQLAlchemy
from flask_cors import Cors


app = Flask(__name__)
api = Api(app)
db = SQLAlchemy(app)
CORS(app)



