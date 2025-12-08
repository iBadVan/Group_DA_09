var admin = require("firebase-admin");
var serviceAccount = require("./actividadda-fcf75-firebase-adminsdk-fbsvc-579f2eb8b5.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://actividadda-fcf75-default-rtdb.firebaseio.com/"
});

var db = admin.database();
var ref = db.ref("server/data");
var usersRef = ref.child("nodejs");
usersRef.set({
  usuarios: {
    name: "carlos reyes",
    age: 28,
    salary: 2304.54
  }
});
