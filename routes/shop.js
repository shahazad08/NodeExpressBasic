const path=require('path')
const express=require('express')
const router=express.Router();
const rootDir=require('../util.js/path');
const adminData=require('./admin')

router.get('/', (req, res, next) => {
    console.log("This always Runs Shop Page")
    console.log('Shop JS FIle',adminData.products)
    const products=adminData.products
    res.render('shop', {prods:products,pageTitle:'Shop', path: '/'})    // Rendering Pug FIle



})

module.exports=router;


    // res.sendFile(path.join(rootDir, 'views', 'shop.html'))    //Rendering HTML FIle
    // res.send('<h1>Hello From Express JS</h1>')   // Rendering Simple HTML FIle