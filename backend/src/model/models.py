"""from src.app import db

class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True ,nullable = False)
    name = db.Column(db.String(100), nullable=False)
    lastname = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), nullable=False, unique=True)
    date = db.Column(db.Date, nullable=False)
    created_at = db.Column(db.Date(timezone=True), nullable=False)

    def __repr__(self) -> str:
        return f"hola {self.name} - {self.date}" """