"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var auth_router_1 = require("./routers/auth.router");
var auth_controller_1 = require("./controllers/auth.controller");
var bodyParser = require("body-parser");
var students_router_1 = require("./routers/students.router");
/*--------------------------*/
var app = express();
app.set("port", process.env.PORT || 3000);
/*--------------------------*/
app.use(bodyParser.json());
app.use('/api', auth_controller_1.isLogin);
app.use('/api', students_router_1.StudentsRouter);
app.use('/auth', auth_router_1.AuthRouter);
exports.default = app;
