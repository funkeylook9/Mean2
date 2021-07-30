var express = require('express');
var router = express.Router();
var productController = require('../Controller/productController')

/* GET users listing. */
router.get('/',productController.GetProduct);
router.get('/:id',productController.GetProductbyID);

router.post('/',productController.AddProduct);

router.put('/:id',productController.UpdateProduct);

router.delete('/:id',productController.DeleteProduct);



module.exports = router;
