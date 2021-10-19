const express = require('express')
const router = express.Router();
const productsController=require('../controllers/products')


// /admin/add-product=> GET
router.get('/add-product', productsController.getAddProduct);

// /admin/add-product=> POST
router.post('/add-product', productsController.postAddProduct)

module.exports=router;


  //    res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>')  // Basic One
  //  res.sendFile(path.join(rootDir, 'views', 'add-product.html'))   // Create HTMl