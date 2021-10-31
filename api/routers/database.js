var serviceAccount = require("./serviceAccountKey.json");
var admin = require("firebase-admin");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://isentropic-keep-318816-default-rtdb.firebaseio.com"
  });
  module.exports = admin;