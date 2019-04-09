import { Request, Response } from 'express';
import { db } from '../services/firebase.service';

export let createStudents = (req : Request, res : Response) => { 
    let id : string = req.body.name;
    if(id==undefined){
        res.status(400);
        res.send({messgae : "Name is empty"});
    }
    db.collection('students').doc(id).set({
        name : req.body.name,
        dob : req.body.dob,
        school : req.body.school,
        class : req.body.class,
        division : req.body.division,
        status : req.body.status
    })
    .then(()=>{
        res.send('ok');
    })
    .catch((error)=>{
        res.status(200);
        res.send(error)
    })
}


export let updateStudents = (req : Request, res : Response) => { 
    let id : string = req.body.name;
    if(id==undefined){
        res.status(400);
        res.send({messgae : "Name is empty"});
    }
    db.collection('students').doc(id).update({
        name : req.body.name,
        dob : req.body.dob,
        school : req.body.school,
        class : req.body.class,
        division : req.body.division,
        status : req.body.status
    })
    .then(()=>{
        res.send('ok');
    })
    .catch((error)=>{
        res.status(200);
        res.send(error)
    })
}

export let deleteStudents = (req : Request, res : Response) => {
    let id : string = req.body.name;
    if(id==undefined){
        res.status(400);
        res.send({messgae : "Name is empty"});
    }

    db.collection("students").doc(id).delete() 
    .then(()=>{
        res.send('ok');
    })
    .catch((error)=>{
        res.status(400);
        res.send(error)
    })
}

export let readAllStudents = (req : Request, res : Response) => {
    let result : any[] = [];
    db.collection("students").get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            console.log(doc.id, " => ", doc.data());
            result.push(doc.data());
        });
        res.send(result);
    });
}

