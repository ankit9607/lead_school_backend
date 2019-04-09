import express = require("express");

import { AuthRouter } from './routers/auth.router';
import { isLogin } from './controllers/auth.controller';
import bodyParser = require("body-parser");
import { StudentsRouter } from "./routers/students.router";

/*--------------------------*/
const app = express();

app.set("port", process.env.PORT || 3000);
/*--------------------------*/

app.use(bodyParser.json());
app.use('/api', isLogin);
app.use('/api', StudentsRouter);
app.use('/auth', AuthRouter);


export default app;