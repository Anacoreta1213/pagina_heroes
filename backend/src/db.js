const mongoose = require("mongoose");

// Utilzaremos una función para conectarnos a la puta base de datos:

async function connectionDB({port,host,dbName}){

    const uri = `mongodb://${host}:${port}/${dbName}`;

    await mongoose.connect(uri,{
        useFindAndModify:false,
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
   
}

mongoose.connection.once("open",()=>{
    console.log("We are connected")
})

module.exports = connectionDB;