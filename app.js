console.log("Welcome to Express JS");


const bodyParser = require('body-parser');
const express=require('express')

const app=express();
app.use(bodyParser.urlencoded({extended:false}))



app.use('/add-product', (req, res, next)=> {
    console.log("Add Product Pagee");
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>')
});

app.post('/product', (req, res, next) => {
    console.log(req.body)
    res.redirect('/');
})


app.use('/', (req, res, next) => {
    console.log("This always Runs")
    res.send('<h1>Hello From Express JS</h1>')
})



app.listen(4001)




//or
// const server=http.createServer(app)
// server.listen(4001);