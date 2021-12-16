console.log("Welcome to Express JS");

const bodyParser = require('body-parser');
const mongoose=require('mongoose')
const express = require('express')
const path = require('path')
const app = express();
const port = process.env.PORT || 4001;



app.set('view engine', 'ejs') // Setting the pug as a template engine
app.set('views', 'views')  // Path or a file which we need to render from that...


 const adminRoutes = require('./routes/admin')
 const shopRoutes = require('./routes/shop')

const errorControllers=require('./controllers/error')
//const mongoConnect=require('./util.js/database').mongoConnect
const dbConfig=require('./util.js/db.config')
const User=require('./models/user');
const { log } = require('console');




app.use(bodyParser.urlencoded({ extended: false }))
//app.use(express.static(path.join(__dirname,'public')))
app.use(express.static(path.join(__dirname, 'public')));

// app.use((req, res, next)=> {
//    User.findById('619747a992bdb5837d4ee6f7')
//       .then(user=> {
//          req.user=user
//          next()
//       })
//       .catch(err=> {console.log(err)})
//   // next()
// })

 app.use(shopRoutes)
 app.use('/admin', adminRoutes)

app.use(errorControllers.get404)


mongoose.connect(dbConfig.url, {
   useNewUrlParser: true
   }).then(() => {
     console.log("Successfully connected to the database");
   }).catch(err => {
     console.log('Could not connect to the database.', err);
     process.exit();
   });

   app.listen(port, () => {
      console.log(`Node server is listening on port ${port}`);
   });


//or
// const server=http.createServer(app)
// server.listen(4001);

   //    res.status(404).send('<h1>Page Not Found</h1>')
    //res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))