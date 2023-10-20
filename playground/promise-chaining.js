require('../src/db/mongoose');
const User=require('../src/models/users');

// User.findByIdAndUpdate('652bfadcee362636f0af8c78',{age:1}).then((user)=>{
//     console.log(user);
//     return User.countDocuments({age:1})
// }).then((count)=>{
//     console.log(count);
// }).catch((error)=>{
//     console.log(error);
// })

const updateageandcount=async(id,age)=>{
    const user=await User.findByIdAndUpdate(id,{age:age});
    const count=await User.countDocuments({age});
    return count;
}

updateageandcount('652bf40aaf91cc1ee91c17d8',2).then((count)=>{
    console.log(count);
}).catch((error)=>{
    console.log(error);
})