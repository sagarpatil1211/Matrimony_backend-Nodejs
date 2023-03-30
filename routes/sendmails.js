var nodemailer = require('nodemailer');
let express = require("express");

let Email = require("../models/mail");

let router = express.Router();

router.post("/", (req,res)=>{
    let body = req.body;
    // console.log(body);
    let email = new Email();
    if(email.sendmail( body.name,body.email,body.password)){
        res.end(JSON.stringify({status : "success"}))
    }
    else{
        res.end(JSON.stringify({status : "failed"}))

    }
    
    

    
})

module.exports = router;