const express=require('express')
const router=express.Router();

router.get('/', (req, res, next) => {
    console.log("This always Runs")
    res.send('<h1>Hello From Express JS</h1>')
})

module.exports=router;