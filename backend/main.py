from app import app, db
from app.models import Pessoa, Usuario

@app.shell_context_processor
def shell_conext():
    return dict(
        app=app,
        db=db,
        Usuario=Usuario,
        Pessoa=Pessoa
    )


if __name__ == "__main__":
    app.run(debug=True)