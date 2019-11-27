const mongoose = require('mongoose');

var speacialtySchema = new mongoose.Schema({
    splName : {
        type : String, 
        required : true
    },

    crAt  : {                                  // Created At
        type:Date, 
        default:Date.now 
    }
});


/* Create the model */
mongoose.model('specialty',speacialtySchema);