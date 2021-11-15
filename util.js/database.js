const mongodb=require('mongodb')
const MongoClient=mongodb.MongoClient

let _db

const mongoConnect=callback=> {
    MongoClient.connect('mongodb+srv://azim:byQidpBSOOEpUu0B@cluster0.mjc6b.mongodb.net/shop?retryWrites=true&w=majority')
    .then(client=>{
        console.log(" I have Connected")
        _db=client.db()
        callback()
    })
    .catch(err=> {
        console.log(err)
        throw err
    })
}

const getDb=()=> {
    if(_db){
        return _db
    }
    throw "No Database Found"
}

exports.mongoConnect=mongoConnect
exports.getDb=getDb
