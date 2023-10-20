const mongoose=require('mongoose');
const validator=require('validator');

const task=mongoose.model('Tasks',{      //model define kiya hai
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
});

module.exports=task;