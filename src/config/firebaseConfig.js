import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import admin from "firebase-admin";

const firebaseConfig = {
    apiKey: process.env.FBASE_APIKEY,
    authDomain: process.env.FBASE_AUTH_DOMAIN,
    databaseURL: process.env.FBASE_DATABASE_URL,
    projectId: process.env.FBASE_PROJECT_ID,
    storageBucket: process.env.FBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FBASE_MESSAGESENDER_ID,
    appId: process.env.FBASE_APP_ID,
    measurementId: process.env.FBASE_MEASURMENT_ID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
export const database = getDatabase(app);