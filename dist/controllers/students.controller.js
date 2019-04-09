"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var firebase_service_1 = require("../services/firebase.service");
exports.createStudents = function (req, res) {
    var id = req.body.name;
    if (id == undefined) {
        res.status(400);
        res.send({ messgae: "Name is empty" });
    }
    firebase_service_1.db.collection('students').doc(id).set({
        name: req.body.name,
        dob: req.body.dob,
        school: req.body.school,
        class: req.body.class,
        division: req.body.division,
        status: req.body.status
    })
        .then(function () {
        res.send('ok');
    })
        .catch(function (error) {
        res.status(200);
        res.send(error);
    });
};
exports.updateStudents = function (req, res) {
    var id = req.body.name;
    if (id == undefined) {
        res.status(400);
        res.send({ messgae: "Name is empty" });
    }
    firebase_service_1.db.collection('students').doc(id).update({
        name: req.body.name,
        dob: req.body.dob,
        school: req.body.school,
        class: req.body.class,
        division: req.body.division,
        status: req.body.status
    })
        .then(function () {
        res.send('ok');
    })
        .catch(function (error) {
        res.status(200);
        res.send(error);
    });
};
exports.deleteStudents = function (req, res) {
    var id = req.body.name;
    if (id == undefined) {
        res.status(400);
        res.send({ messgae: "Name is empty" });
    }
    firebase_service_1.db.collection("students").doc(id).delete()
        .then(function () {
        res.send('ok');
    })
        .catch(function (error) {
        res.status(200);
        res.send(error);
    });
};
exports.readAllStudents = function (req, res) {
    var result = [];
    firebase_service_1.db.collection("students").get().then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            result.push(doc.data());
        });
        res.send(result);
    });
};
