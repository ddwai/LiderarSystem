from flask_restful import Api
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from config import config

db = SQLAlchemy()

def create_app(config_name):
    app = Flask(__name__)
    app.config.from_object(config[config_name])

    api = Api(app, prefix="/api/v1")
    db.init_app(app)
    CORS(app)

    from app.resources.cadastro import Pessoas
    api.add_resource(Pessoas, "/pessoas")
    
    return app



