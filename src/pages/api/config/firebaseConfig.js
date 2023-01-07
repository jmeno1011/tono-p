// const admin = require("firebase-admin");
// // import admin from "firebase-admin"

// if (!admin.apps.length) {
//     // console.log("init - admin");
//     try{
//         admin.initializeApp({
//             credential: admin.credential.cert({
//                 "type": process.env.SA_KEY_TYPE,
//                 "project_id": process.env.SA_KEY_PROJECT_ID,
//                 "private_key_id": process.env.SA_KEY_PRIVATE_KEY_ID,
//                 "private_key": process.env.SA_KEY_PRIVATE_KEY,
//                 "client_email": process.env.SA_KEY_CLIENT_EMAIL,
//                 "client_id": process.env.SA_KEY_CLIENT_ID,
//                 "auth_uri": process.env.SA_KEY_AUTH_URI,
//                 "token_uri": process.env.SA_KEY_TOKEN_URI,
//                 "auth_provider_x509_cert_url": process.env.SA_KEY_AUTH_PROVIDER_URL,
//                 "client_x509_cert_url": process.env.SA_KEY_CLIENT_URL
//             }),
//             databaseURL: process.env.FBASE_DATABASE_URL
//         })
//     }catch(error){
//         console.log('Firebase admin initialization error', error.stack);
//     }
// } else {
//     admin.app();
// }

// const db = admin.database();
// module.exports = db;


import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Initialize Firebase
const app = initializeApp({
    apiKey: process.env.FBASE_APIKEY,
    authDomain: process.env.FBASE_AUTH_DOMAIN,
    databaseURL: process.env.FBASE_DATABASE_URL,
    projectId: process.env.FBASE_PROJECT_ID,
    storageBucket: process.env.FBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FBASE_MESSAGESENDER_ID,
    appId: process.env.FBASE_APP_ID,
    measurementId: process.env.FBASE_MEASURMENT_ID
});

// Initialize Realtime Database and get a reference to the service
export const database = getDatabase(app);