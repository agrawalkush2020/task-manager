// const mongoose=require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });

// const user=mongoose.model('user',{      //model define kiya hai
//     name:{
//         type:String
//     },
//     age:{
//         type:Number
//     }
// })

// const me=new user({       //yh instance bna liya hai 
//     name:'Andrew',
//     age:'mike'
// })

// me.save().then(()=>{      //yhn argument ki jaroort ni 
//     console.log(me);
// }).catch((error)=>{
//     console.log('Error!'+ error);
// })



// video ->84
// const mongoose=require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });

// const task=mongoose.model('Tasks',{      //model define kiya hai
//     description:{
//         type:String
//     },
//     completed:{
//         type:Boolean
//     }
// })

// const first=new task({       //yh instance bna liya hai 
//     description:'learn the mongoose library',
//     completed:false
// })

// first.save().then(()=>{      //yhn argument ki jaroort ni 
//     console.log(first);
// }).catch((error)=>{
//     console.log('Error!'+ error);
// })




// video -> 85
// const mongoose=require('mongoose');
// const validator=require('validator');
// mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });

// const user=mongoose.model('user',{      //model define kiya hai
//     name:{
//         type:String,
//         required:true,
//         trim:true,
//     },
//     email:{
//         type:String,
//         required:true,
//         trim:true,
//         lowercase:true,
//         validate(value){
//             if(!validator.isEmail(value)){
//                 throw new Error('email is invalid !!');
//             }
//         }
//     },
//     age:{
//         type:Number,
//         default:0,
//         validate(value){
//             if(value<0) throw new Error('age must be a positive number');
//         }
//     }
// })

// const me=new user({       //yh instance bna liya hai 
//     name:'      Andrew   ',
//     email:'MYEMAIL@MEAD.IO  '
// })

// me.save().then(()=>{      //yhn argument ki jaroort ni 
//     console.log(me);
// }).catch((error)=>{
//     console.log('Error!'+ error);
// })





// video -> 86
// const mongoose=require('mongoose');
// const validator=require('validator');
// mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });

// const user=mongoose.model('user',{      //model define kiya hai
//     name:{
//         type:String,
//         required:true,
//         trim:true,
//     },
//     email:{
//         type:String,
//         required:true,
//         trim:true,
//         lowercase:true,
//         validate(value){
//             if(!validator.isEmail(value)){
//                 throw new Error('email is invalid !!');
//             }
//         }
//     },
//     age:{
//         type:Number,
//         default:0,
//         validate(value){
//             if(value<0) throw new Error('age must be a positive number');
//         }
//     },
//     password:{
//         type:String,
//         required:true,
//         trim:true,
//         minlength:7,
//         validate(value){
//             if(value==='password'){
//                 throw new Error('password should not be password itself !!');
//             }
//         }
//     }
// })

// const me=new user({       //yh instance bna liya hai 
//     name:'      Andrew   ',
//     email:'MYEMAIL@MEAD.IO  ',
//     password:'Phone098'
// })

// me.save().then(()=>{      //yhn argument ki jaroort ni 
//     console.log(me);
// }).catch((error)=>{
//     console.log('Error!'+ error);
// })

// ----------------another challenge--------
// const mongoose=require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });

// const task=mongoose.model('Tasks',{      //model define kiya hai
//     description:{
//         type:String,
//         trim:true,
//         required:true,
//     },
//     completed:{
//         type:Boolean,
//         default:false,
//     }
// })

// const first=new task({       //yh instance bna liya hai 
//     description:'    Eat the lunch !!'
// })

// first.save().then(()=>{      //yhn argument ki jaroort ni 
//     console.log(first);
// }).catch((error)=>{
//     console.log('Error!'+ error);
// })





// video ->89
const mongoose=require('mongoose');
mongoose.set('strictQuery', false);
mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
