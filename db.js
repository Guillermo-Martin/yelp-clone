const firebase = require("firebase");
require("firebase/firestore");

// get firebase configuration
const config = require("./config");

// initialize Cloud Firestore through Firebase
const db = firebase.initializeApp(config.firebaseConfig);

// export database
module.exports = db;