const mongoose = require('mongoose');

var schema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    mobile:{
        type:Number,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    job:{
        type:String,
        required:true,
    },
    dob:{
        type:String,
        required:true,
    },
    location:{
        type:String,
        required:true 
    }
})

module.exports= mongoose.model('userdb',schema);