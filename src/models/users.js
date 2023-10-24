const mongoose=require('mongoose');
const validator=require('validator');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const Task=require('./tasks');

const userschema=new mongoose.Schema({       
    name:{
        type:String,
        required:true,
        trim:true,
    },
    email:{
        type:String,
        unique:true,
        required:true,
        trim:true,
        lowercase:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('email is invalid !!');
            }
        }
    },
    age:{
        type:Number,
        default:0,
        validate(value){
            if(value<0) throw new Error('age must be a positive number');
        }
    },
    password:{
        type:String,
        required:true,
        trim:true,
        minlength:7,
        validate(value){
            if(value==='password'){
                throw new Error('password should not be password itself !!');
            }
        }
    },
    tokens:[{
        token:{
            type:String,
            required:true,
        }
    }],
    avatar:{
        type:Buffer
    }
},{
    timestamps:true
}); 

userschema.virtual('tasks',{
    ref:'Tasks',
    localField:'_id',
    foreignField:'owner'
})

userschema.methods.toJSON=function(){
    const user=this;

    const userobject=user.toObject();
    delete userobject.password;
    delete userobject.tokens;

    return userobject;
}

userschema.methods.generateauthtoken=async function(){
    const user=this;
    const token=jwt.sign({_id:user._id.toString()},'thisismynewcourse');
    
    user.tokens=user.tokens.concat({token});
    await user.save(); 

    return token;
}

userschema.statics.findbycredentials=async(email,password)=>{
    const user=await Users.findOne({email});
    if(!user) throw new Error('unable to login !!');

    const ismatch=await bcrypt.compare(password,user.password);
    if(!ismatch) throw new Error('unable to login !!');

    return user;
}


//hash the plain text password before saving
userschema.pre('save',async function(next){
    const user=this; 
    if(user.isModified('password')){
        user.password=await bcrypt.hash(user.password,8);
    }

    next();
})

// delete user's all tasks when user is removed
userschema.pre('remove',async(next)=>{
    const user=this;
    await Task.deleteMany({owner:user._id});
    next();
})


const Users=mongoose.model('Users',userschema);
module.exports=Users;