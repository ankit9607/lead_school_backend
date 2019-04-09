import { Request, Response } from 'express';
import { auth } from '../services/firebase.service';
export let signup = (req : Request, res : Response) => {
    console.log("Singup Called!");
    const promise = auth.createUser(
        {
            email : req.get('email'),
            password : req.get('pass')
        }
    );
    promise.then(user => res.send(user))
    .catch((error) => {
        console.log("Singup Error Occured!");
        res.status(400);
        res.send(error);
    });

    //User respone : new created
    //{"uid":"gsXy4i4LI1NlSJ3Bp0Tft26XawC2","email":"ankit9607@gamil.com","emailVerified":false,"disabled":false,"metadata":{"lastSignInTime":null,"creationTime":"Tue, 09 Apr 2019 16:57:16 GMT"},"passwordHash":"UkVEQUNURUQ=","tokensValidAfterTime":"Tue, 09 Apr 2019 16:57:16 GMT","providerData":[{"uid":"ankit9607@gamil.com","email":"ankit9607@gamil.com","providerId":"password"}]}
    // already exists
    //{"code":"auth/email-already-exists","message":"The email address is already in use by another account."}
}

export let login = (req : Request, res : Response) => {
    console.log("Login Called!");
    console.log(req.get('email'));
    let email : string = req.get('email') || '';
    const promise = auth.getUserByEmail(email);
    promise.then((user)=>{
        res.send(user);
    })
    .catch((error)=>{
        console.log("Login Error Occured!");
        res.status(400);
        res.send(error);
    })
    
}

export let isLogin = (req : Request, res : Response, next : any) => {
    let uid : string = req.get('uid') || "";
    const promise = auth.getUser(uid);
    promise.then((user)=>{
        next();
    })
    .catch((error)=>{
        res.status(200);
        res.send(error);
    })
}