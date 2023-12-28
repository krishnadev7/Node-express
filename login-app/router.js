const express = require('express');
const router = express.Router();

const credential = {
    email: "krishnadevv12@gmail.com",
    password: "krishnadev123"
}

router.post('/login',(req,res) => {
        if(req.body.email == credential.email && req.body.password == credential.password){
            req.session.user = req.body.email;
            res.end("Successfully LoggedIn");
        }else{
            res.end("Invalid Credentials!");
        }

})

module.exports = router;