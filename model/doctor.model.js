const mongoose = require('mongoose');

var doctorSchema = new mongoose.Schema({
    docName : {
        type : String, 
        required : true
    },
    age : {
        type : Number 
    },
    crAt  : {                                  // Created At
        type:Date, 
        default:Date.now 
    },
    specialty : {
        type : Array,                           
        required : true
    },
    docStatus : {
        type : String,
        default : 'A'
    }
});


/* Create the model */
mongoose.model('doctor',doctorSchema);