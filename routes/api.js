const express = require('express');
const router = express.Router();
const Contact = require('../models/contact');

// GET list of contacts
router.get('/contacts', function(req, res, next){
  Contact.find({}).then(function(contacts){
    res.send(contacts);
  });
});

router.get('/contacts/:name', function(req, res, next){
  Contact.find({name: req.params.name}).then(function(contacts){
    res.send(contacts);
  });
});

router.get('/contacts/id/:_id', function(req, res, next){
  Contact.findById({_id: req.params._id}).then(function(contacts){
    res.send(contacts);
  });
});

// GET by name
/*router.get('/contacts', function(req, res, next){
  Contact.find({name: req.query.name}).then(function(contact){
    res.send(contact);
  });
});*/

// POST add contact to list
router.post('/contacts', function(req, res, next){
  Contact.create(req.body).then(function(contact){
    res.send(contact);
  }).catch(next);
});

// PUT update contact in list
router.put('/contacts/:name', function(req, res, next){
  Contact.findOneAndUpdate({name: req.params.name}, req.body).then(function(){
    Contact.findOne({name: req.body.name}).then(function(contact){
      res.send(contact);
    }).catch(next);
  });
});

router.delete('/contacts', function(req, res, next){
  Contact.remove({}).then(function(){
    res.send("All contacts deleted");
  });
});

// DELETE contact from list
router.delete('/contacts/:name', function(req, res, next){
  Contact.remove({name: req.params.name}).then(function(contact){
    res.send(contact + ' deleted');
  });
});

module.exports = router;
