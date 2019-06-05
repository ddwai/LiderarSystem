from app import db
from werkzeug.security import generate_password_hash, check_password_hash


class Pessoa(db.Model):
    __tablename__ = "pessoa"
    
    id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    nome = db.Column(db.String(50), nullable=False, index=True)
    sobrenome = db.Column(db.String(20), nullable=False, index=True)
    cpf = db.Column(db.String(11), nullable=False, unique=True, index=True)
    data_nascimento = db.Column(db.DateTime, nullable=False)
    sexo = db.Column(db.String(1), nullable=False)
    contato = db.Column(db.String(12))
    email = db.Column(db.String(255), nullable=False, unique=True, index=True)

    def __init__(self, nome, sobrenome, cpf, data_nascimento, sexo, contato, email):
        self.nome = nome
        self.sobrenome = sobrenome
        self.cpf = cpf
        self.data_nascimento = data_nascimento
        self.sexo = sexo
        self.contato = contato
        self.email = email

        
class Usuario(db.Model):
    __tablename__ = "usuario"

    id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    email = db.Column(db.String(255), nullable=False, unique=True, index=True)
    password = db.Column(db.String(128), nullable=False)

    def __init__(self, email, password):
        self.email = email
        self.password = generate_password_hash(password)


    def compare_password(self, password):
        return self.check_password_hash(self.password, password)

    def __repr__(self):
        return f"<User: {self.email}"

class Rede(db.Model):
    __tablename__ = "rede"
    
    id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    

    def __init__(self, nome, sobrenome, cpf, data_nascimento, sexo, contato, email):
        self.nome = nome
        self.sobrenome = sobrenome
        self.cpf = cpf
        self.data_nascimento = data_nascimento
        self.sexo = sexo
        self.contato = contato
        self.email = email


        
