FROM python:3

WORKDIR /app

ENV FLASK_APP=app.py

ENV FLASK_RUN_HOST=0.0.0.0

COPY . /app

COPY requirements.txt ./

RUN pip --no-cache-dir install -r requirements.txt

COPY . .

CMD ["flask", "run", "--debug"]