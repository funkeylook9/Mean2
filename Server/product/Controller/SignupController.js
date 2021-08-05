const model = require('../models')

const SignUp = model.Signup






const PostLoginData = async (req, res) => {
    let data = {
        email: req.body.email,
        password: req.body.password,
    }
    let getSignupdata = await SignUp.findAll({})
    let Filter = getSignupdata.filter(v => {
        return v.email == data.email && v.password == data.password
    })
    if (Filter.length){
        res.json(`User ${data.email} Login Successfully`)
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