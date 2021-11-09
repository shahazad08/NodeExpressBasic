const mysql=require('mysql2')

const pool=mysql.createPool({
    host: 'localost',
    user:'root',
    database: 'node-complete',
    password:'shahazad'
});

module.exports=pool.promise()