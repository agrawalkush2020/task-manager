const express=require('express');
const Users=require('../models/users');
const auth=require('../middleware/auth');
const userrouter=new express.Router();

userrouter.post('/users',async(req,res)=>{
    const user=new Users(req.body);

    try {
        await user.save();
        const token=await user.generateauthtoken();
        res.status(201).send({user,token});
    } catch (error) {
        res.status(400).send(error);
    }
})

userrouter.post('/users/login',async(req,res)=>{
    try {
        const user=await Users.findbycredentials(req.body.email,req.body.password); //using that function 
        const token=await user.generateauthtoken();
        res.send({user,token});   //using short hand notation
    } catch (error) {
        res.status(400).send(error);
    }
})

userrouter.post('/users/logout',auth,async (req,res)=>{
    try {
        req.user.tokens=req.user.tokens.filter((token)=>{
            return token.token!==req.token;
        })

        await req.user.save();
        res.send();
    } catch (error) {
        res.status(500).send();
    }
})

userrouter.post('/users/logoutall', auth ,async (req,res)=>{  //challenge
    try {
        req.user.tokens=[];

        await req.user.save();
        res.send();
    } catch (error) {
        res.status(500).send();
    }

})

userrouter.get('/users/me', auth ,async(req,res)=>{
    res.send(req.user);
})

userrouter.patch('/users/me',auth,async(req,res)=>{
    const updates=Object.keys(req.body);
    const allowedupdates=['name','age','password','email'];
    const isvalidoperation=updates.every((update)=>{
        return allowedupdates.includes(update);
    })

    if(!isvalidoperation) return res.status(400).send({error:'invalid operation'});

    updates.forEach((update)=>req.user[update]=req.body[update]);
    try {
        await req.user.save();
        res.send(req.user);
    } catch (error) {
        res.status(400).send(error);
    }
    
})

 
userrouter.delete('/users/me',auth,async(req,res)=>{
    try {
        req.user=await req.user.deleteOne();    //pichli do lines ki jgh yh line likhdi 
        res.send(req.user);
    } catch (error) {
        res.status(500).send(error);
    }
})

module.exports=userrouter;