FROM python

WORKDIR /app

COPY requirements.txt ./

RUN pip install -r requirements.txt

COPY . /app/

CMD ["python", "src/manage.py", "runserver", "0.0.0.0:8000"]

