const admin = require("firebase-admin");

if (!admin.apps.length) {
    // console.log("init - admin");
    admin.initializeApp({
        credential: admin.credential.cert({
            "type": process.env.SA_KEY_TYPE,
            "project_id": process.env.SA_KEY_PROJECT_ID,
            "private_key_id": process.env.SA_KEY_PRIVATE_KEY_ID,
            "private_key": process.env.SA_KEY_PRIVATE_KEY,
            "client_email": process.env.SA_KEY_CLIENT_EMAIL,
            "client_id": process.env.SA_KEY_CLIENT_ID,
            "auth_uri": process.env.SA_KEY_AUTH_URI,
            "token_uri": process.env.SA_KEY_TOKEN_URI,
            "auth_provider_x509_cert_url": process.env.SA_KEY_AUTH_PROVIDER_URL,
            "client_x509_cert_url": process.env.SA_KEY_CLIENT_URL
        }),
        databaseURL: process.env.FBASE_DATABASE_URL
    })
} else {
    admin.app();
}

const db = admin.database();
module.exports = db;