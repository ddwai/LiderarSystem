from flask_restful import Resource
from app import request
from app.models import Usuario

class LoginRouter(Resource)
    pass

class RegisterRouter(Resource)
    crendial = request.only(["email", "password"])

    usuario = Usuario(crendial["email", crendial["password"]])

    try:
        