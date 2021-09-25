console.log("Welcome to Express JS");
const http=require('http');

const express=require('express')

const app=express();
app.use((req, res, next) => {
    console.log("in the Middleware")
    next();  // Allows the request to continue to the next middleware in the line...
})

app.use((req, res, next) => {
    console.log("in the another Middleware")
    res.send('<h1>Hello From Express JS</h1>')
})



const server=http.createServer(app)

server.listen(4001);