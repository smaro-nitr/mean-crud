const express = require('express');
const userRouter = express.Router();

var userService = require('./../service/user-service'); 

userRouter.post('/contact', userRouter.addContact = (req, res, next) => {
    userService.addContact(req, res, next);
})

userRouter.get('/contact', userRouter.fetchContact = (req, res, next)=>{
    userService.fetchContact(req, res, next);
})

userRouter.put('/contact/:id', (req, res, next)=>{
    userService.updateContact(req, res, next);
})

userRouter.delete('/contact/:id', (req, res, next)=>{
    userService.deleteContact(req, res, next);
})

module.exports = userRouter;