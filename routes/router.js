const express = require('express');
const Router = express.Router();
const userLogic =require('../logics/userLogics');

Router.get('/', (req,res)=>{
    res.send("HI");
})

//API
Router.post('/api/users', userLogic.create)
Router.get('/api/users', userLogic.find)
Router.put('/api/users/:id', userLogic.update)
Router.delete('/api/users/:id', userLogic.delete)

module.exports= Router;