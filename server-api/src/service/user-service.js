var userDao = require('./../dao/user-dao');

var userService = {};

userService.addContact = (req, res, next) => {
    userDao.addContact(req, res, next);
}

userService.fetchContact = (req, res, next)=>{
    userDao.fetchContact(req, res, next);
}

userService.updateContact = (req, res, next)=>{
    userDao.updateContact(req, res, next);
}

userService.deleteContact = (req, res, next)=>{
    userDao.deleteContact(req, res, next);
}

module.exports = userService;