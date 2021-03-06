const model = require('../models')
let jwt = require('jsonwebtoken');
global.config = require('../config/jwtConfig');
const SignUp = model.Signup

const PostLoginData = async (req, res,next) => {
    let data = {
        email: req.body.email,
        password: req.body.password,
    }
    let getSignupdata = await SignUp.findAll({})
    let Filter = getSignupdata.filter(v => {
        return v.email == data.email && v.password == data.password
    })
    if (Filter.length){

        let token = await jwt.sign(data,global.config.secretKey,{
            algorithm:global.config.algorithm,
            expiresIn: '1m'
        });

        res.json({
            message:"Login SuccessFul",
            jwtoken : token
        
        })
        
    }else{
        res.json('Email or Password incorrect')
    }
}
const PostSignupData = async (req, res) => {
    let data = {
        name: req.body.name,
        email: req.body.email,
        contact: req.body.contact,
        password: req.body.password,
        conformPassword: req.body.conformPassword
    }

    let getSignupdata = await SignUp.findAll({})

    let Filter = getSignupdata.filter(v => {
        return v.email == data.email
    });

    if (Filter.length) {
        res.json('Email alredy Registered Or User Alredy Exist')
    } else if (data.password !== data.conformPassword) {
        res.json("password & Conform Password Not Matched")
    }
    else {
        let createsignupData = await SignUp.create(data);
        res.json(createsignupData)

    }
}

const GetSignupData = async (req, res) => {
    

    let getSignupdata = await SignUp.findAll({});

  res.json(getSignupdata)

    }

module.exports = {
    PostSignupData,
    PostLoginData,
    GetSignupData
}
    
//create middlewer