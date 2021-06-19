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

@app.route('/<string:codigo_invitado>', methods=['GET'])
@cross_origin()
def get(codigo_invitado):
  if codigo_invitado == 'favicon.ico':
    return ''
  db = Database()
  db.cursor.execute(f'SELECT * FROM info WHERE codigoInvitado = \'{codigo_invitado}\'')
  info = db.cursor.fetchall()
  print(info)
  tickets_recepcion_info = []
  tickets_after_info = []
  for ticket in info:
    if ticket[3] == '':
      tickets_after_info.append({
        "id": ticket[2],
        "nombre": ticket[4]
      }) 
    else:
      tickets_recepcion_info.append({
        "id": ticket[2],
        "nombre": ticket[3]
    })
  return {
    "codigo_invitado": codigo_invitado,
    "rotulo": info[0][1],
    "boletos_recepcion": {
      "total": len(tickets_recepcion_info),
      "info_boletos": tickets_recepcion_info

    },
    "boletos_after": {
      "total": len(tickets_after_info),
      "info_boletos": tickets_after_info
    }
  }

@app.route('/', methods=['POST'])
@cross_origin()
def post():
  db = Database()
  data = request.get_json()
  codigo_invitado = data.get('codigo_invitado')
  db.cursor.execute(f'SELECT * FROM info WHERE codigoInvitado = \'{codigo_invitado}\'')
  info = db.cursor.fetchall()
  print(info)
  if info:
    tickets_recepcion_info = []
    tickets_after_info = []
    for ticket in info:
      if ticket[3] == '':
        tickets_after_info.append({
          "id": ticket[2],
          "nombre": ticket[4]
        }) 
      else:
        tickets_recepcion_info.append({
          "id": ticket[2],
          "nombre": ticket[3]
      })
    return {
      "codigo_invitado": codigo_invitado,
      "rotulo": info[0][1],
      "boletos_recepcion": {
        "total": 2,
        "info_boletos": tickets_recepcion_info
      },
      "boletos_after": {
        "total": 3,
        "info_boletos": tickets_after_info
      }
    }
  return 'false'
  

# PATCH
@app.route('/', methods=['PATCH'])
@cross_origin()
def updateDB():
  data = request.get_json()
  db = Database()
  print(data.get('codigo_invitado'))
  # debe recibir arreglo de ids
  #tickets = data.get('tickets_array')
  #for ticket in tickets:
  #  db.cursor.execute(f'UPDATE guest SET asiste = 1 WHERE id = \'{ticket}\'')
   # db.cursor.connection.commit()
  return 'true'
