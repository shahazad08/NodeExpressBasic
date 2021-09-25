console.log("Welcome to Express JS");


const express=require('express')

const app=express();

app.use('/', (req, res, next) => {
    console.log("in the another Middleware")
    //res.send('<h1>Hello From Express JS</h1>')
    next()
})

app.use('/add-product', (req, res, next)=> {
    console.log("Add Product Pagee");
    res.send('<h1>The Add product Page</h1>')
})


app.use('/',(req, res, next) => {
    console.log("Welcome Page------")
    res.send('<h1>Welcome</h1>')
})




app.listen(4001)




//or
// const server=http.createServer(app)
// server.listen(4001);