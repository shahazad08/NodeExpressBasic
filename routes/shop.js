const path=require('path')
const express=require('express')
const router=express.Router();
const rootDir=require('../util.js/path');
const adminData=require('./admin')

router.get('/', (req, res, next) => {
    console.log("This always Runs Shop Page")
    console.log('Shop JS FIle',adminData.products)
    res.sendFile(path.join(rootDir, 'views', 'shop.html'))
   // res.send('<h1>Hello From Express JS</h1>')

})

module.exports=router;