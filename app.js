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
const mongoConnect=require('./util.js/database').mongoConnect
const User=require('./models/user')




app.use(bodyParser.urlencoded({ extended: false }))
//app.use(express.static(path.join(__dirname,'public')))
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next)=> {
   User.findById('619747a992bdb5837d4ee6f7')
      .then(user=> {
         req.user=user
         next()
      })
      .catch(err=> {console.log(err)})
  // next()
})

 app.use(shopRoutes)
 app.use('/admin', adminRoutes)

app.use(errorControllers.get404)

mongoConnect(()=> {
  // console.log(client)
   app.listen(4001)
})


//or
// const server=http.createServer(app)
// server.listen(4001);

   //    res.status(404).send('<h1>Page Not Found</h1>')
    //res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))