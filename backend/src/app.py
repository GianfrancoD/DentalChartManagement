import datetime
from flask import Flask, request,jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from sqlalchemy import create_engine, Column, Integer, String, DateTime
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

app = Flask(__name__)
CORS(app)
"""db = SQLAlchemy(app)"""
app.config['SQLALCHEMY_TRACK_MODIFICATION'] = False
"""app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://gianfranco@localhost:5432/oplesk'"""

db_name = 'oplesk'
db_user = 'gianfranco'
db_port = '5432'
db_host = 'localhost'

engine = create_engine(f'postgresql://{db_user}@{db_host}:{db_port}/{db_name}')
Session = sessionmaker(bind=engine)
Base = declarative_base()

session = Session()

class Users(Base):
    __tablename__ = 'patient_data'
    id = Column(Integer, primary_key=True)
    username = Column(String(80), nullable=False)
    lastname = Column(String(80), unique=True, nullable=False)
    email = Column(String(100), unique=True, nullable=False)
    phone = Column(Integer, nullable=False, unique=True)
    datetime = Column(DateTime, nullable=False)

    def __init__(self, username, lastname, email, phone, datetime):
        self.username=username
        self.email=email
        self.lastname=lastname
        self.phone=phone
        self.datetime=datetime

@app.route('/save_user', methods=['POST'])
def submit():
    if request.method == 'POST':
        username = request.form['username']
        lastname = request.form['lastname']
        email = request.form['email']
        phone = request.form['phone']
        datetime = request.form['datetime']
        user = Users(username, lastname, email, phone, datetime)
        session.add(user)
        session.commit()
        return jsonify(f"your Appoinment is saved {username}-{lastname}")
     
if __name__ == '__main__':
    Base.metadata.create_all(engine)
    app.run(debug=True)