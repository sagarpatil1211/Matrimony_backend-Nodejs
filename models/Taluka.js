let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let schema = new Schema(
    {
<<<<<<< HEAD
        name : { type : String, required : true},
        districtid : { type:Schema.Types.ObjectId, ref:"districts"},
    }
)

let Taluka = mongoose.model("talukas", schema);

module.exports = Taluka;
=======
        name:{type:String, required:true},
        districtid:{type:Schema.Types.ObjectId, ref:"district"},
        
    }
)

let Taluka = mongoose.model("talukas",schema);
module.exports = Taluka;
>>>>>>> 13dca23cce823a9ca8ad7af2d84ab149dab2c5f2
