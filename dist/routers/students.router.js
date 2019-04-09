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
var StudentController = __importStar(require("../controllers/students.controller"));
exports.StudentsRouter = express_1.Router();
exports.StudentsRouter.put('/students/create', StudentController.createStudents);
exports.StudentsRouter.put('/students/update', StudentController.updateStudents);
exports.StudentsRouter.delete('/students/delete', StudentController.deleteStudents);
exports.StudentsRouter.get('/students/read_all', StudentController.readAllStudents);
