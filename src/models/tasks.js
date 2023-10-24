const mongoose=require('mongoose');
const validator=require('validator');

const taskschema = new mongoose.Schema({      //model define kiya hai
    description:{
        type:String,
        trim:true,
        required:true,
    },
    completed:{
        type:Boolean,
        default:false,
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'Users'
    }
},{
    timestamps:true
});

const task=mongoose.model('Tasks',taskschema);
module.exports=task;