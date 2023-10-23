// const express=require('express');
// require('./db/mongoose');
// const Users=require('./models/users');
// const Tasks=require('./models/tasks');

// const app=express();
// const port=process.env.PORT || 3000;
// app.use(express.json());         //isse json file object mein change ho gyi 


// app.post('/users',(req,res)=>{
//     const user=new Users(req.body);

//     user.save().then(()=>{
//         res.status(201).send(user);
//     }).catch((error)=>{
//         res.status(400).send(error);
//     })

// })

// app.get('/users',(req,res)=>{
//     Users.find({}).then((users)=>{
//         res.send(users);
//     }).catch((error)=>{
//         res.status(500).send(error);
//     })
// })

// app.get('/users/:id',(req,res)=>{
//     const _id=req.params.id;

//     Users.findOne({_id:_id}).then((user)=>{
//         if(!user) return res.status(404).send();
//         res.send(user);
//     }).catch((error)=>{
//         res.status(500).send();
//     })
// })

// ////////////////////////////   now tasks

// app.post('/tasks',(req,res)=>{
//     const task=new Tasks(req.body);

//     task.save().then(()=>{
//         res.status(201).send(task);
//     }).catch((error)=>{
//         res.status(400).send(error);
//     })

// })

// app.get('/tasks',(req,res)=>{
//     Tasks.find().then((tasks)=>{
//         res.send(tasks);
//     }).catch((error)=>{
//         res.status(500).send(error);
//     })
// })

// app.get('/tasks/:id',(req,res)=>{
//     const _id=req.params.id;

//     Tasks.findOne({_id:_id}).then((task)=>{
//         if(!task) return res.status(404).send();
//         res.send(task);
//     }).catch((error)=>{
//         res.status(500).send();
//     })
// })

// app.listen(port,()=>{
//     console.log('Server is on port'+port);
// })





// video ->97
// const express=require('express');
// require('./db/mongoose');
// const Users=require('./models/users');
// const Tasks=require('./models/tasks');

// const app=express();
// const port=process.env.PORT || 3000;
// app.use(express.json());         //isse json file object mein change ho gyi 


// app.post('/users',async(req,res)=>{
//     const user=new Users(req.body);

//     try {
//         await user.save();
//         res.status(201).send(user);
//     } catch (error) {
//         res.status(400).send(error);
//     }
// })

// app.get('/users',async(req,res)=>{

//     try {
//         const users=await Users.find();
//         res.send(users);
//     } catch (error) {
//         res.status(500).send(error);
//     }
 
// })

// app.get('/users/:id',async(req,res)=>{
//     const _id=req.params.id;

//     try {
//         const user=await Users.findOne({_id:_id});
//         if(!user) return res.status(404).send();
//         res.send(user);
//     } catch (error) {
//         res.status(500).send();
//     }

// })

// ////////////////////////////   now tasks

// app.post('/tasks',async(req,res)=>{
//     const task=new Tasks(req.body);

//     try {
//         await task.save();
//         res.status(201).send(task);
//     } catch (error) {
//         res.status(400).send(error);
//     }

// })

// app.get('/tasks',async(req,res)=>{

//     try {
//         const tasks=await Tasks.find();
//         res.send(tasks);
//     } catch (error) {
//         res.status(500).send(error);
//     }

// })

// app.get('/tasks/:id',async(req,res)=>{
//     const _id=req.params.id;

//     try {
//         const task=await Tasks.findOne({_id});
//         if(!task) return res.status(404).send();
//         res.send(task);
//     } catch (error) {
//         res.status(500).send();
//     }

// })

// app.listen(port,()=>{
//     console.log('Server is on port'+port);
// })





// video -> 98
// const express=require('express');
// require('./db/mongoose');
// const Users=require('./models/users');
// const Tasks=require('./models/tasks');

// const app=express();
// const port=process.env.PORT || 3000;
// app.use(express.json());         //isse json file object mein change ho gyi 


// app.post('/users',async(req,res)=>{
//     const user=new Users(req.body);

//     try {
//         await user.save();
//         res.status(201).send(user);
//     } catch (error) {
//         res.status(400).send(error);
//     }
// })

// app.get('/users',async(req,res)=>{

//     try {
//         const users=await Users.find();
//         res.send(users);
//     } catch (error) {
//         res.status(500).send(error);
//     }
 
// })

// app.get('/users/:id',async(req,res)=>{
//     const _id=req.params.id;

//     try {
//         const user=await Users.findOne({_id:_id});
//         if(!user) return res.status(404).send();
//         res.send(user);
//     } catch (error) {
//         res.status(500).send();
//     }

// })

// app.patch('/users/:id',async(req,res)=>{    //for the update
//     const updates=Object.keys(req.body);
//     const allowedupdates=['name','age','password','email'];
//     const isvalidoperation=updates.every((update)=>{
//         return allowedupdates.includes(update);
//     })

//     if(!isvalidoperation) return res.status(400).send({error:'invalid operation'});

//     try {
//         const user=await Users.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})
//         if(!user) return res.status(404).send();
//         res.send(user);
//     } catch (error) {
//         res.status(400).send(error);
//     }

// })

// app.delete('/users/:id',async(req,res)=>{
//     try {
//         const user=await Users.findByIdAndDelete(req.params.id);
//         if(!user) return res.status(404).send();
//         res.send(user);
//     } catch (error) {
//         res.status(500).send(error);
//     }
// })

// ////////////////////////////   now tasks

// app.post('/tasks',async(req,res)=>{
//     const task=new Tasks(req.body);

//     try {
//         await task.save();
//         res.status(201).send(task);
//     } catch (error) {
//         res.status(400).send(error);
//     }

// })

// app.get('/tasks',async(req,res)=>{

//     try {
//         const tasks=await Tasks.find();
//         res.send(tasks);
//     } catch (error) {
//         res.status(500).send(error);
//     }

// })

// app.get('/tasks/:id',async(req,res)=>{
//     const _id=req.params.id;

//     try {
//         const task=await Tasks.findOne({_id});
//         if(!task) return res.status(404).send();
//         res.send(task);
//     } catch (error) {
//         res.status(500).send();
//     }

// })

// app.patch('/tasks/:id',async(req,res)=>{    //for the update
//     const updates=Object.keys(req.body);
//     const allowedupdates=['desciption','completed'];
//     const isvalidoperation=updates.every((update)=>{
//         return allowedupdates.includes(update);
//     })

//     if(!isvalidoperation) return res.status(400).send({error:'invalid operation'});

//     try {
//         const task=await Tasks.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})
//         if(!task) return res.status(404).send();
//         res.send(task);
//     } catch (error) {
//         res.status(400).send(error);
//     }

// })

// app.delete('/tasks/:id', async(req,res)=>{
//     try {
//         const task=await Tasks.findByIdAndDelete(req.params.id);
//         if(!task) return res.status(404).send();
//         res.send(task);
//     } catch (error) {
//         res.status(500).send(error);
//     }
// })

// app.listen(port,()=>{
//     console.log('Server is on port'+port);
// })



// video -> 101
// const express=require('express');
// require('./db/mongoose'); 
// const userrouter=require('./routers/user');
// const taskrouter=require('./routers/task');

// const app=express();
// const port=process.env.PORT || 3000;
// app.use(express.json());         //isse json file object mein change ho gyi 

// app.use(userrouter);
// app.use(taskrouter);

// app.listen(port,()=>{
//     console.log('Server is on port'+port);
// })







// video-> 103
// const express=require('express');
// require('./db/mongoose'); 
// const userrouter=require('./routers/user');
// const taskrouter=require('./routers/task');

// const app=express();
// const port=process.env.PORT || 3000;
// app.use(express.json());         //isse json file object mein change ho gyi 

// app.use(userrouter);
// app.use(taskrouter);

// app.listen(port,()=>{
//     console.log('Server is on port '+port);
// })



// video -> 114
const express=require('express');
require('./db/mongoose'); 
const userrouter=require('./routers/user');
const taskrouter=require('./routers/task');

const app=express();
const port=process.env.PORT || 3000;
app.use(express.json());         //isse json file object mein change ho gyi 

app.use(userrouter);
app.use(taskrouter);

app.listen(port,()=>{
    console.log('Server is on port '+port);
})



const Tasks=require('./models/tasks');

const main=async()=>{
    const task=await Tasks.findById('65326d48b826e5343b5a7985').populate('owner').execPopulate();
    // await task.populate('owner').execPopulate();
    console.log(task);
}

main();