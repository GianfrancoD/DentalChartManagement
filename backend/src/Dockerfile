FROM alpine:3.10

RUN apk add --no-cache python3-dev && pip3 install --upgrade pip

WORKDIR /app

ENV FLASK_APP=app.py

ENV FLASK_RUN_HOST=0.0.0.0

COPY . /app

COPY requirements.txt ./

RUN pip3 --no-cache-dir install -r requirements.txt

CMD ["flask", "run", "--debug"]
