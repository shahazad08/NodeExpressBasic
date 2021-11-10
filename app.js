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

const sequelize=require('./util.js/database')


app.use(bodyParser.urlencoded({ extended: false }))
//app.use(express.static(path.join(__dirname,'public')))
app.use(express.static(path.join(__dirname, 'public')));

app.use(shopRoutes)
app.use('/admin', adminRoutes)

app.use(errorControllers.get404)

sequelize
   .sync()
   .then(result=> {
      console.log(result)
      app.listen(4001)

   })
   .catch(err=> {
      console.log(err)
   })





//or
// const server=http.createServer(app)
// server.listen(4001);

   //    res.status(404).send('<h1>Page Not Found</h1>')
    //res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))