const path=require('path')
const express=require('express')
const router=express.Router();


const productsController=require('../controllers/products')

router.get('/', productsController.getProducts)

module.exports=router;


    // res.sendFile(path.join(rootDir, 'views', 'shop.html'))    //Rendering HTML FIle
    // res.send('<h1>Hello From Express JS</h1>')   // Rendering Simple HTML FIle