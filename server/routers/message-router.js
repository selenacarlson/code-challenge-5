const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema(
    {
        name: String,
        text: String
    }
);

const Message = mongoose.model('Message', MessageSchema, 'messages');

router.get('/', function(req, res) {
    Message.find({}, function(error, foundMessages){
        if (error){
            console.log('error on find messages', error);
            res.sendStatus(500);
        } else {
            res.send(foundMessages);
        }
    })
});

router.post('/', function(req, res) {
    let newMessage = new Message(req.body);
    console.log('saving message', newMessage);
    newMessage.save( function(error, savedMessage){
        if (error){
            console.log('error on add message', error)
        } else {
            res.sendStatus(200);
        }
    })
});


module.exports = router;