require('../src/db/mongoose');
const Task=require('../src/models/tasks');

//652bebdbaac6bc8a7ced33fd

// Task.findByIdAndDelete('652bebdbaac6bc8a7ced33fd').then((user)=>{
//     console.log(user);
//     return Task.countDocuments({completed:false})
// }).then((count_result)=>{
//     console.log(count_result);
// }).catch((error)=>{
//     console.log(error);
// })

const deleteandcount=async(id)=>{
    const user=await Task.findByIdAndDelete(id);
    const count=await Task.countDocuments({completed:false});

    return count;
}

deleteandcount('652bfc5a5d198afa7f78ac6e').then((count)=>{
    console.log(count);
}).catch((error)=>{
    console.log(error);
})