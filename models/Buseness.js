let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let schema = new Schema(
    {
        name : { type : String, required : true},
        ownername : { type : String, required : true},
        address : { type : String, required : true},
        ownername : { type : String, required : true},
        townid : { type : String, required : true},
        tagline : { type : String, required : true},
        email : { type : String, required : true, unique : true},
        mobileno : { type : String, required : true, unique : true},
        website : { type : String, required : true},
        logopath : { type : String, required : true},
        accountopeningdate : { type : Date, required : true},
        ownername : { type : String, required : true},
    }
)