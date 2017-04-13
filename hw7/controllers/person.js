//引入 person data mode

var Person = require('../models/person');

module.exports = function(req,res,next){
    res.send('Thank you');
    var person = new Person({
        username: req.body.username,
        password: req.body.password
    });
    person.save(function(err){
        if(err) throw err;
        console.log('Person Saved !');
    });
}