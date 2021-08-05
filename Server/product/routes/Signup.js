var express = require('express');
var router = express.Router();
var signupController = require('../Controller/SignupController')

/* GET users listing. */
// router.get('/',productController.GetProduct);
// router.get('/:id',productController.GetProductbyID);

router.post('/signup',signupController.PostSignupData);
router.post('/login',signupController.PostLoginData);

// router.put('/:id',productController.UpdateProduct);

// router.delete('/:id',productController.DeleteProduct);


module.exports = router;
