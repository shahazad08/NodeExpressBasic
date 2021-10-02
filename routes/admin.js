const express = require('express')
const router = express.Router();
const path = require('path')
const rootDir = require('../util.js/path');

const products=[]

// /admin/add-product=> GET
router.get('/add-product', (req, res, next) => {
    console.log("Add Product Pagee");
    //    res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>')  // Basic One
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'))   // Create HTMl
});

// /admin/add-product=> POST
router.post('/add-product', (req, res, next) => {
    console.log(req.body)
    products.push({title:req.body.title})
    res.redirect('/');
})

//module.exports = router
exports.routes=router
exports.products=products
