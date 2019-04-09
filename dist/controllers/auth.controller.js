"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var firebase_service_1 = require("../services/firebase.service");
exports.signup = function (req, res) {
    console.log("Singup Called!");
    var promise = firebase_service_1.auth.createUser({
        email: req.get('email'),
        password: req.get('pass')
    });
    promise.then(function (user) { return res.send(user); })
        .catch(function (error) {
        console.log("Singup Error Occured!");
        res.status(400);
        res.send(error);
    });
    //User respone : new created
    //{"uid":"gsXy4i4LI1NlSJ3Bp0Tft26XawC2","email":"ankit9607@gamil.com","emailVerified":false,"disabled":false,"metadata":{"lastSignInTime":null,"creationTime":"Tue, 09 Apr 2019 16:57:16 GMT"},"passwordHash":"UkVEQUNURUQ=","tokensValidAfterTime":"Tue, 09 Apr 2019 16:57:16 GMT","providerData":[{"uid":"ankit9607@gamil.com","email":"ankit9607@gamil.com","providerId":"password"}]}
    // already exists
    //{"code":"auth/email-already-exists","message":"The email address is already in use by another account."}
};
exports.login = function (req, res) {
    console.log("Login Called!");
    console.log(req.get('email'));
    var email = req.get('email') || '';
    var promise = firebase_service_1.auth.getUserByEmail(email);
    promise.then(function (user) {
        res.send(user);
    })
        .catch(function (error) {
        console.log("Login Error Occured!");
        res.status(400);
        res.send(error);
    });
};
exports.isLogin = function (req, res, next) {
    var uid = req.get('uid') || "";
    var promise = firebase_service_1.auth.getUser(uid);
    promise.then(function (user) {
        next();
    })
        .catch(function (error) {
        res.status(200);
        res.send(error);
    });
};
