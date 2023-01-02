const admin = require("firebase-admin");
const serviceAccountKey = require("../../../../serviceAccountKey.json");

// console.log(process.env.FBASE_DATABASE_URL);

if (!admin.apps.length) {
    console.log("init - admin");
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccountKey),
        databaseURL: process.env.FBASE_DATABASE_URL
    })
} else {
    admin.app();
}

const db = admin.database();
module.exports = db;