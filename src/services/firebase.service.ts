import * as admin from 'firebase-admin';

//FIREBASE INIT
const serviceAccount = require('../../lead-school-firebase-adminsdk-5vw5l-a6c784147e.json');
admin.initializeApp({credential : admin.credential.cert(serviceAccount)});

export const db = admin.firestore();

export const auth = admin.auth();
