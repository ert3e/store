const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();
const mongoose = require('mongoose');
require('dotenv').config();

mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATABASE);

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cookieParser());

const { User } = require('./models/user');
//==================================
//             USERS
//==================================
app.post('/api/user/register',(req,res)=>{
    const user = new User(req.body);
    user.save((err,doc) =>{
        if(err) return res.json({succes:false,err});
        res.status(200).json({
            succes: true,
            userdata: doc
        })
    })
})
app.post('/api/users/login',(req,res)=>{
   User.findOne({'email': req.body.email}, () =>{
       if(!user) return res.json({loginSucces:false, message:'Ath failes mails not found'})
   })
})
app.post('/api')
const port = process.env.PORT || 3002;

app.listen(port,() => {
    console.log(`Server Runing at "http://localhost:${port}"`)
})