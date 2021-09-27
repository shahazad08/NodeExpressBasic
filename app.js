console.log("Welcome to Express JS");

const bodyParser = require('body-parser');
const express=require('express')
const app=express();

const adminRoutes=require('./routes/admin')
const shopRoutes=require('./routes/shop')

app.use(bodyParser.urlencoded({extended:false}))

app.use(shopRoutes)
app.use('/admin',adminRoutes)

app.use((req,res,next)=> {
    res.status(404).send('<h1>Page Not Found</h1>')
})

app.listen(4001)




//or
// const server=http.createServer(app)
// server.listen(4001);