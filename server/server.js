const express = require('express');
const app = express();

app.use(express.static('server/public'));

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const mongoose = require('mongoose');
const databaseUrl = 'mongodb://localhost:27017/ccfive_selena';

mongoose.connection.on('connected', function() {
    console.log('mongoose connected to: ', databaseUrl);
  })
  
mongoose.connection.on('error', function(error) {
    console.log('mongoose connection error: ', error);
  })

mongoose.connect(databaseUrl);

const messageRouter = require('./routers/message-router');
app.use('/messages', messageRouter);

app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), function() {
    console.log('Listening on port: ', app.get('port'));
});