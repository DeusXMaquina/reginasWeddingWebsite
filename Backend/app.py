from flask import Flask, jsonify, request
from flaskext.mysql import MySQL
from flask_cors import CORS, cross_origin
from flask_restful import reqparse

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS']= 'Content-Type'
app.config['MYSQL_DATABASE_USER'] = 'root'
app.config['MYSQL_DATABASE_DB'] = 'wedding'
app.config['MYSQL_DATABASE_HOST'] = 'localhost'

class Database:
  def __init__(self):
    mysql = MySQL()
    mysql.init_app(app)
    conn = mysql.connect()
    self.cursor = conn.cursor()
    parser = reqparse.RequestParser()
    #parser.add_argument('invitados', required=True, location='headers')
    #self.env = request.headers.get('invitados')

@app.route('/<string:codigo_invitado>', methods=['GET'])
@cross_origin()
def get(codigo_invitado):
  if codigo_invitado == 'favicon.ico':
    return ''
  db = Database()
  db.cursor.execute(f'SELECT * FROM invitacion WHERE codigoInvitado = \'{codigo_invitado}\'')
  return jsonify(db.cursor.fetchall())

@app.route('/<string:tableName>', methods=['POST'])
@cross_origin()
def post():
  return 'Hello this is a post request'

# PATCH
@app.route('/<string:table_name>', methods=['PATCH'])
@cross_origin()
def updateDB(tableName):
  if table_name == 'productos':
    data = request.get_json()
    db = Database()
    #db.cursor.execute("UPDATE %s SET nombre = '%s', precioVenta = '%s' WHERE id= %s" %(db.env, data.get('nombre'), data.get('precioVenta'), data.get('id')))
    #db.cursor.connection.commit()
    return jsonify(db.cursor.fetchall())


@app.route('/delete', methods=['DELETE'])
@cross_origin()
def delete():
  return 'Hello this is a delete request'