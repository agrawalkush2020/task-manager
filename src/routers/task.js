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

// tasks?completed=true
// tasks?limit=x&skip=10 -> skipping first 10 results and then getting the 10 results
// tasks?sortby=createdAt:desc   -> sorting technique of results
taskrouter.get('/tasks', auth, async(req,res)=>{
    const match={};
    const sort={};

    if(req.query.completed){
        match.completed=req.query.completed=='true'
    }

    if(req.query.sortby){
        const parts=req.query.sortby.split(':');
        sort[parts[0]]=parts[1]==='desc'? -1 : 1;
    }

    try {
        await req.user.populate({
            path:'tasks',
            match,
            options:{
                limit:parseInt(req.query.limit),   // maked this dynamic
                skip:parseInt(req.query.skip),     // skip option 
                sort 
            }
        });
        res.send(req.user.tasks);
    } catch (error) {
        res.status(500).send(error);
    }

})

taskrouter.get('/tasks/:id', auth, async(req,res)=>{
    const _id=req.params.id;

    try {
        // const task=await Tasks.findOne({_id});
        const task=await Tasks.findOne({_id,owner:req.user._id})
        if(!task) return res.status(404).send();
        res.send(task);
    } catch (error) {
        res.status(500).send();
    }

})

taskrouter.patch('/tasks/:id', auth, async(req,res)=>{    //for the update
    const updates=Object.keys(req.body);
    const allowedupdates=['desciption','completed'];
    const isvalidoperation=updates.every((update)=>{
        return allowedupdates.includes(update);
    })

    if(!isvalidoperation) return res.status(400).send({error:'invalid operation'});

    try { 
        const task=await Tasks.findOne({_id:req.params.id,owner:req.user._id});
        if(!task) return res.status(404).send();

        updates.forEach((update) => task[update]=req.body[update]);

        await task.save();
        res.send(task);
    } catch (error) {
        res.status(400).send(error);
    }

})

taskrouter.delete('/tasks/:id', auth, async(req,res)=>{
    try {
        const task=await Tasks.findOneAndDelete({_id:req.params.id,owner:req.user._id});
        if(!task) return res.status(404).send();
        res.send(task);
    } catch (error) {
        res.status(500).send(error);
    }
})

module.exports=taskrouter;