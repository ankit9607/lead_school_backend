"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var AuthController = __importStar(require("../controllers/auth.controller"));
exports.AuthRouter = express_1.Router();
exports.AuthRouter.get('/singup', AuthController.signup);
exports.AuthRouter.get('/login', AuthController.login);
