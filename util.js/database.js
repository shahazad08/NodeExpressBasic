const mongodb=require('mongodb')
const MongoClient=mongodb.MongoClient

const mongoConnect=callback=> {
    MongoClient.connect('mongodb+srv://azim:byQidpBSOOEpUu0B@cluster0.mjc6b.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
    .then(client=>{
        console.log(" I have Connected")
        callback(client)
    })
    .catch(err=> {
        console.log(err)
    })
}

module.exports=mongoConnect
