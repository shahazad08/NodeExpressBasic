console.log("Welcome to Practice JS")

const express=require('express')

const app=express();

// app.use((req, res, next) => {
//     console.log("1st Middleware");
//     next()
// })


// app.use((req, res, next)=> {
//     console.log("2nd Middleware");
//     res.send('<p>Assigment Solved<p>')
// })



app.use('/users', (req, res, next)=> {
    console.log("/Users Page");
    res.send('<h1>The Middleware that handles the just users </h1>')
})


app.use('/', (req, res, next)=> {
    console.log("/ middleware Page");
    res.send('<h1>The Middleware that handles the just / </h1>')
})

app.listen(4002)
