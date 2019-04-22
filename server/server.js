const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE);

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
    
    res.status(200);
})

const port = process.env.PORT || 3002;

app.listen(port,() => {
    console.log(`Server Runing at "http://localhost:${port}"`)
})