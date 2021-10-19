console.log("Welcome to Express JS");

const bodyParser = require('body-parser');
const express = require('express')
const path = require('path')
const app = express();



app.set('view engine', 'ejs') // Setting the pug as a template engine
app.set('views', 'views')  // Path or a file which we need to render from that...


const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

app.use(bodyParser.urlencoded({ extended: false }))
//app.use(express.static(path.join(__dirname,'public')))
app.use(express.static(path.join(__dirname, 'public')));

app.use(shopRoutes)
app.use('/admin', adminRoutes)

app.use((req, res, next) => {
    //    res.status(404).send('<h1>Page Not Found</h1>')
    //res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
    res.status(404).render('404', {pageTitle:'Page Not Found'})
})

app.listen(4001)




//or
// const server=http.createServer(app)
// server.listen(4001);