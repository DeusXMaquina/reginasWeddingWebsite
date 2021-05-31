from flask import Flask, jsonify, request
from flaskext.mysql import MySQL
from flask_cors import CORS, cross_origin
from flask_restful import reqparse

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS']= 'Content-Type'
app.config['MYSQL_DATABASE_USER'] = 'root'
app.config['MYSQL_DATABASE_DB'] = 'weddinginvite'
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

#@app.route('/<string:codigo_invitado>', methods=['GET'])
#@cross_origin()
#def get(codigo_invitado):
#  if codigo_invitado == 'favicon.ico':
#    return ''
#  db = Database()
#  db.cursor.execute(f'SELECT * FROM informacionInvitado WHERE codigoInvitado = \'{codigo_invitado}\'')
#  info = db.cursor.fetchall()
#  return jsonify(info[0])

@app.route('/<string:codigo_invitado>', methods=['GET'])
@cross_origin()
def get(codigo_invitado):
  if codigo_invitado == 'favicon.ico':
    return ''
  db = Database()
  db.cursor.execute(f'SELECT * FROM info WHERE codigoInvitado = \'{codigo_invitado}\'')
  info = db.cursor.fetchall()
  print(info[0])
  tickets_info = []
  for ticket in info:
    tickets_info.append({
      "id": ticket[2],
      "nombre": ticket[3] if ticket[3] != '' else ticket[4],
      "evento": 1 if ticket[3] != '' else 2 
    })
  print(tickets_info)
  return {
    "codigo_invitado": codigo_invitado,
    "rotulo": info[0][1],
    "boletos": tickets_info
  }


@app.route('/<string:guest_id>', methods=['POST'])
@cross_origin()
def post(guest_id):
  db = Database()
  db.cursor.execute(f'SELECT * FROM invitacion WHERE codigoInvitado = \'{guest_id}\'')
  info = db.cursor.fetchall()
  if info:
    return jsonify(info[0])
  return 'false'
  

# PATCH
@app.route('/', methods=['PATCH'])
@cross_origin()
def updateDB():
  data = request.get_json()
  db = Database()
  id = data.get('guestID')
  r_tickets = data.get('receptionTickets')
  a_tickets = data.get('afterTickets')
  db.cursor.execute(f'UPDATE invitacion SET boletosReceptionConfirmados = {r_tickets} , boletosAfterConfirmados = {a_tickets} WHERE codigoInvitado = \'{id}\'')
  db.cursor.connection.commit()
  return 'true'


@app.route('/delete', methods=['DELETE'])
@cross_origin()
def delete():
  return 'Hello this is a delete request'