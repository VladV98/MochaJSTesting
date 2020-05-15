const assert = require('assert');
const marioChar = require('../models/mariochar');

//Describe tests
describe('Saving records', function(){

    //Create tests
    it('Saves a record to the database', function(done){

        var char = new marioChar({
            name:'Mario',
            weight:50
        });
        char.save().then(function(){
            assert(char.isNew===false);
            done();
        });

    });
});