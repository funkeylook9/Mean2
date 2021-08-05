const model = require('../models')
const Product = model.Product
const SignUp = model.Signup

const AddProduct = (req,res)=>{
   let data = {
    name:req.body.name,
    Color:req.body.Color,
    size:req.body.size,
    qty:req.body.qty,
    rate:req.body.rate,
    };
    Product.create(data)
    .then(data=>{
        res.json(data)
    })
    .catch(err=>{
        console.log("Error During Creating Product",err);
    });
};

const GetProduct = (req,res)=>{

     Product.findAll({})
     .then(data=>{
         res.json(data)
         
     })
     .catch(err=>{
         console.log("Error During Creating Product",err);
     });
 };

 const UpdateProduct = (req,res)=>{
     let id = req.params.id
    let data = {
     name:req.body.name,
     Color:req.body.Color,
     size:req.body.size,
     qty:req.body.qty,
     rate:req.body.rate,
     };
     Product.update(data,{where:{id:id}})
     .then(data=>{
         res.json(`id ${id} Updated successFully`)
     })
     .catch(err=>{
         console.log("Error During Creating Product",err);
     });
 };

 const DeleteProduct = (req,res)=>{
    let id = req.params.id
   
    Product.destroy({where:{id:id}})
    .then(data=>{
        res.json(`id ${id} deleted successFully`)
    })
    .catch(err=>{
        console.log("Error During Creating Product",err);
    });
};

const GetProductbyID = (req,res)=>{
    let id = req.params.id

    Product.findByPk(id)
    .then(data=>{
        res.json(data)
    })
    .catch(err=>{
        console.log("Error During Creating Product",err);
    });
};

const PostLoginData = async(req,res)=>{

}
const PostSignupData = async(req,res)=>{
    let data = {
        name:req.body.name,
        email:req.body.email,
        contact:req.body.contact,
        password:req.body.password,
        conformPassword:req.body.conformPassword
    }
    let signupData = await SignUp.create(data);
}
module.exports = {
    AddProduct,
    GetProduct,
    UpdateProduct,
    DeleteProduct,
    GetProductbyID,
    PostSignupData
}