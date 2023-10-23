const express=require('express');
const Tasks=require('../models/tasks');
const auth = require('../middleware/auth');
const taskrouter=new express.Router();

taskrouter.post('/tasks', auth, async(req,res)=>{
    // const task=new Tasks(req.body);
    const task=new Tasks({
        ...req.body,
        owner:req.user._id
    })

    try {
        await task.save();
        res.status(201).send(task);
    } catch (error) {
        res.status(400).send(error);
    }

})

taskrouter.get('/tasks',async(req,res)=>{

    try {
        const tasks=await Tasks.find();
        res.send(tasks);
    } catch (error) {
        res.status(500).send(error);
    }

})

taskrouter.get('/tasks/:id',async(req,res)=>{
    const _id=req.params.id;

    try {
        const task=await Tasks.findOne({_id});
        if(!task) return res.status(404).send();
        res.send(task);
    } catch (error) {
        res.status(500).send();
    }

})

taskrouter.patch('/tasks/:id',async(req,res)=>{    //for the update
    const updates=Object.keys(req.body);
    const allowedupdates=['desciption','completed'];
    const isvalidoperation=updates.every((update)=>{
        return allowedupdates.includes(update);
    })

    if(!isvalidoperation) return res.status(400).send({error:'invalid operation'});

    try {

        const task=await Tasks.findById(req.params.id);
        if(!task) return res.status(404).send();

        updates.forEach((update)=>task[update]=req.body[update]);
        await task.save();

        // const task=await Tasks.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})
        
        res.send(task);
    } catch (error) {
        res.status(400).send(error);
    }

})

taskrouter.delete('/tasks/:id', async(req,res)=>{
    try {
        const task=await Tasks.findByIdAndDelete(req.params.id);
        if(!task) return res.status(404).send();
        res.send(task);
    } catch (error) {
        res.status(500).send(error);
    }
})

module.exports=taskrouter;