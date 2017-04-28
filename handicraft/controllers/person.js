var Person = require('../models/person');

module.exports = function(req,res,next){
    res.send('Thank you');
    var person = new Person({
        account: req.body.account,
        mail: req.body.mail,
        comment: req.body.comment
    });
    person.save(function(err){
        if(err) throw err;
        console.log('Person Saved !');
    });
};