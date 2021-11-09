console.log("Welcome to Express JS");

const bodyParser = require('body-parser');
const express = require('express')
const path = require('path')
const app = express();



app.set('view engine', 'ejs') // Setting the pug as a template engine
app.set('views', 'views')  // Path or a file which we need to render from that...


const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

const errorControllers=require('./controllers/error')

// const db=require('./util.js/database')

// db.execute('SELECT * FROM products')
//    .then(result => {
//       console.log(result[0], result[1])
//    })
//    .catch(err=> {
//       console.log("Err is--",err)
// })

app.use(bodyParser.urlencoded({ extended: false }))
//app.use(express.static(path.join(__dirname,'public')))
app.use(express.static(path.join(__dirname, 'public')));

app.use(shopRoutes)
app.use('/admin', adminRoutes)

app.use(errorControllers.get404)

app.listen(4001)




//or
// const server=http.createServer(app)
// server.listen(4001);

   //    res.status(404).send('<h1>Page Not Found</h1>')
    //res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))