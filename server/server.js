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
//Models
const { User } = require('./models/user');
//Middlewares
const { auth } = require('./middleware/auth')
//==================================
//             USERS
//==================================
app.post('/api/users/register',(req,res)=>{
    const user = new User(req.body);
    user.save((err,doc) =>{
        if(err) return res.json({succes:false,err});
        res.status(200).json({
            succes: true
        })
    })
});
app.get('/api/users/auth',auth,(req,res)=>{
    res.status(200).json({
        isAdmin: req.user.role === 0 ? false : true,
        isAuth: true,
        email: req.user.email,
        name: req.user.name,
        lastname: req.user.lastname,
        role: req.user.role,
        cart: req.user.cart,
        history: req.user.history
    })
})
app.post('/api/users/login',(req,res)=>{
   User.findOne({'email': req.body.email},(err, user)=>{
       if(!user) return res.json({loginSucces:false, message:'Auth failes mails not found'})
       user.comparePassword(req.body.password,(err,isMatch)=>{
           if(!isMatch) return res.json({loginSucces:false,message:'Wrong password'});
           user.generateToken((err,user) =>{
               if(err) return res.status(400).send(err);
               res.cookie('w_auth',user.token).status(200).json({
                   loginSucces: true
               })
           })
        })
    })
})
app.post('/api')
const port = process.env.PORT || 3002;

app.listen(port,() => {
    console.log(`Server Runing at "http://localhost:${port}"`)
})