"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var admin = __importStar(require("firebase-admin"));
//FIREBASE INIT
var serviceAccount = require('../../lead-school-firebase-adminsdk-5vw5l-a6c784147e.json');
admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });
exports.db = admin.firestore();
exports.auth = admin.auth();
