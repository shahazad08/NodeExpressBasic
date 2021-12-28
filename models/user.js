const mongoose=require('mongoose')
const Schema =mongoose.Schema

const userSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    carts:{
        items:[
            {
                productId:{type:Schema.Types.ObjectId, required:true},
                quantity:{ type:Number, required:true}
            }
        ]
    }
})

module.exports=mongoose.model('User', userSchema)


// const mongodb=require('mongodb')
// const { getDb } = require('../util.js/database')
// const ObjectId=mongodb.ObjectId

// class User {
//     constructor(username, email) {
//         this.name=username,
//         this.email=email
//     }

//     save() {
//         const db=getDb()
//         return db.collection('users').insertOne(this)
//     }

//     static findById(userId) {
//         const db=getDb()
//         return db.collection('users').findOne({_id: new ObjectId(userId)})
//         .then(user=> {
//             console.log("User is",user);
//             return user
//         })
//         .catch(err=> {
//             console.log(err);
//         })
//     }
// }
// module.exports=User


// /*
// /** 
// * Paste one or more documents here

// {
//     "_id": {"$oid": "619747a992bdb5837d4ee6f7"},
//     "name":"Shahazad Shaikh",
//     "email":"sk.shahazad@gmail.com"    
// }
// */