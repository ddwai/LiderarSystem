from app import create_app, db
from flask_migrate import Migrate
from app.models import Pessoa, Usuario

app = create_app("development")


Migrate(app, db)


@app.shell_context_processor
def shell_conext():
    return dict(
        app=app,
        db=db,
        Pessoa=Pessoa,
        Usuario=Usuario   
    )
