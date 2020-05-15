const mongoose = require('mongoose');

//ES6 Promises
mongoose.Promise = global.Promise;

//Connect to mongodb
mongoose.connect('mongodb://localhost/testaroo', { useNewUrlParser: true, useUnifiedTopology: true });


before(function(done){
    mongoose.connection.once('open', function(){
        console.log('Connection has been made, now make fireworks...');
        done();
    }).on('error',function(error){
        console.log('Connection error: ', error);
    })
})

//Drop the characters collection before each test
beforeEach(function(done){
    mongoose.connection.collections.mariochars.drop(function(){
        done();
    });
})