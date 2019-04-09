"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var db_service_1 = require("../services/db.service");
exports.getUser = function (req, res) {
    db_service_1.User.findById(req.params.uname, function (err, user) {
        if (err) {
            res.send(err);
        }
        else {
            res.send(user);
        }
    });
};
exports.setUser = function (req, res) {
    var user = new db_service_1.User({
        uname: req.params.uname,
        pass: req.params.pass
    });
    user.save(function (err) {
        if (err) {
            res.sendStatus(403).json(err);
        }
        else {
            res.sendStatus(200).json({
                message: "loggedIn"
            });
        }
    });
};
