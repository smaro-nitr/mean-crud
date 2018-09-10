const Contact = require('../model/user');

var userDao = {};

userDao.addContact = (req, res, next) => {
    let newContact = new Contact({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        phone_number: req.body.phone_number
    });
    newContact.save((err, contact) => {
        if (err) {
            res.json({msg:'Failed to add contact'});
        } else {
            res.json(contact);
        }
    });
};

userDao.fetchContact = (req, res, next)=>{
    Contact.find((err, data)=>{
        res.json(data);
    });
};

userDao.updateContact = (req, res, next)=>{
    Contact.findOneAndUpdate({_id: req.params.id}, {
        $set: {
            first_name:req.body.first_name,
            last_name:req.body.last_name,
            phone_number:req.body.phone_number
        }
    },
    (err, data)=>{
        if (err){
            res.json(err);
        }else{
            var userdata = new Contact();
            userdata._id = req.params.id,
            userdata.first_name = req.body.first_name;
            userdata.last_name = req.body.last_name;
            userdata.phone_number = req.body.phone_number;
            res.json(userdata);
        }
    });
};

userDao.deleteContact = (req, res, next)=>{
    Contact.remove({_id:req.params.id},(err, data)=>{
        if(err){
            res.json(err);
        }else{
            if(data.n == 0){
                res.json({msg:"nothing found to delete"});
            }else{
                res.json({msg:"deleted succesfully"});
            }
        }
    })
};

module.exports = userDao;