from flask import Flask, request, jsonify
import firebase_admin
from firebase_admin import credentials, firestore

# ==============================================
#  Inicializar Firebase Admin (SOLO UNA VEZ)
# ==============================================

# 👇 CAMBIA el nombre del archivo por el tuyo real si es distinto
cred = credentials.Certificate(
    "cred.json"
)

# Evitar inicializar dos veces si se usa el reloader de Flask
if not firebase_admin._apps:
    firebase_admin.initialize_app(cred)

db = firestore.client()

# ==============================================
#  Crear la app Flask
# ==============================================

app = Flask(__name__)


# ==============================================
#  Rutas de la API
# ==============================================

# Crear usuario (INSERT en Firestore)
@app.route("/api/users", methods=["POST"])
def create_user():
    data = request.get_json()

    name = data.get("name")
    age = data.get("age")
    salary = data.get("salary")

    if not name or age is None or salary is None:
        return jsonify({"error": "name, age y salary son obligatorios"}), 400

    doc_ref = db.collection("users_flask").add(
        {
            "name": name,
            "age": age,
            "salary": salary,
        }
    )

    return jsonify(
        {
            "message": "Usuario creado correctamente (Flask)",
            "id": doc_ref[1].id,
        }
    ), 201


# Listar usuarios (SELECT de Firestore)
@app.route("/api/users", methods=["GET"])
def list_users():
    docs = db.collection("users_flask").stream()

    users = []
    for doc in docs:
        item = doc.to_dict()
        item["id"] = doc.id
        users.append(item)

    return jsonify(users), 200


# ==============================================
#  Punto de entrada
# ==============================================

if __name__ == "__main__":
    # debug=True para ver errores y recargar solo durante el desarrollo
    app.run(host="127.0.0.1", port=5000, debug=True)
