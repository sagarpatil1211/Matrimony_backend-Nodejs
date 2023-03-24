let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let schema = new Schema(
    {
<<<<<<< HEAD
        name : { type : String, required : true},
        talukaid : { type:Schema.Types.ObjectId, ref:"talukas"},
    }
)

let Town = mongoose.model("towns", schema);

module.exports = Town;

=======
        name:{type:String, required:true, unique:true},
        talukaid:{type:Schema.Types.ObjectId, ref:"talukas"},
        
    }
)

let Town = mongoose.model("towns",schema);
module.exports = Town;
>>>>>>> 13dca23cce823a9ca8ad7af2d84ab149dab2c5f2
