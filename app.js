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

const Product=require('./models/product')
const User=require('./models/user')


app.use(bodyParser.urlencoded({ extended: false }))
//app.use(express.static(path.join(__dirname,'public')))
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next)=> {
   User.findByPk(1)
      .then(user=> {
         req.user=user
         next()
      })
      .catch(err=> {console.log(err)})
})

app.use(shopRoutes)
app.use('/admin', adminRoutes)

app.use(errorControllers.get404)

Product.belongsTo(User, {constraints:true, onDelete:'CASCADE'});
User.hasMany(Product)

sequelize
   .sync()
   .then(result=> {
//     console.log("Data us---", result)
      return User.findByPk(1)
     
   })
   .then(user=> {
      if(!user) {
         return User.create({name:'Max', email:'test@test.com'})
      }
      return user
   })
   .then(user=> {
      console.log("User is", user)
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