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
module.exports = {
    PostSignupData,
    PostLoginData
}

/* Post users Login. */
// router.post('/login', function (req, res, next) {
//     let userdata = {
//     username: req.body.username,
//     password: req.body.password
//     };
    
//     //Go to server for user varificarion
//     if (userdata.username == "shashangka" && userdata.password == "12345") {
//     let token = jwt.sign(userdata, global.config.secretKey, {
//     algorithm: global.config.algorithm,
//     expiresIn: '1m'
//     });
    
//     res.status(200).json({
//     message: 'Login Successful',
//     jwtoken: token
//     });
//     }
//     else {
//     res.status(401).json({
//     message: 'Login Failed'
//     });
//     }
//     });
    