import { Router } from 'express';
import * as StudentController from '../controllers/students.controller';


export const StudentsRouter = Router();

StudentsRouter.put('/students/create', StudentController.createStudents);
StudentsRouter.put('/students/update', StudentController.updateStudents);
StudentsRouter.delete('/students/delete', StudentController.deleteStudents);
StudentsRouter.get('/students/read_all', StudentController.readAllStudents);