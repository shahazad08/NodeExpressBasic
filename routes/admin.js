//const path = require('path');
const express = require('express')
const router = express.Router();
const adminController=require('../controllers/admin')


// /admin/add-product=> GET
router.get('/add-product', adminController.getAddProduct);

// /admin/products => GET
router.get('/products', adminController.getProducts)

// /admin/add-product=> POST
router.post('/add-product', adminController.postAddProduct)

module.exports=router;


  //    res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>')  // Basic One
  //  res.sendFile(path.join(rootDir, 'views', 'add-product.html'))   // Create HTMl