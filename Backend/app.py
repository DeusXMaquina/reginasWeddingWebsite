from flask import Flask, jsonify, request
from flaskext.mysql import MySQL
from flask_cors import CORS, cross_origin
from flask_restful import reqparse

app = Flask(__name__)
cors = CORS(app)
# app.config['CORS_HEADERS']= 'Content-Type'
# app.config['MYSQL_DATABASE_USER'] = 'root'
# app.config['MYSQL_DATABASE_PASSWORD'] = 'admin'
# app.config['MYSQL_DATABASE_DB'] = 'listainvitados'
# app.config['MYSQL_DATABASE_HOST'] = 'localhost'

class Database:
  def __init__(self):
    # mysql = MySQL()
    # mysql.init_app(app)
    # conn = mysql.connect()
    # self.cursor = conn.cursor()
    # parser = reqparse.RequestParser()
    # parser.add_argument('invitados', required=True, location='headers')
    # self.env = request.headers.get('invitados')
    return 'initialized'

@app.route('/', methods=['GET'])
@cross_origin()
def get():
  return 'Hello this is a get request'

@app.route('/<string:tableName>', methods=['POST'])
@cross_origin()
def post():
  return 'Hello this is a post request'

@app.route('/patch/<string:tableName>', methods=['PATCH'])
@cross_origin()
def patch():
  return 'Hello this is a patch request'

@app.route('/delete', methods=['DELETE'])
@cross_origin()
def delete():
  return 'Hello this is a delete request'