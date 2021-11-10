const Sequelize=require('sequelize')

const sequelize=new Sequelize('node-complete', 'root', 'shahazad', {
    dialect:'mysql',
    host:'localhost'
})

module.exports=sequelize