var mongoose = require('mongoose');
mongoose.connect('mongodb://handicraftdb:handtest@dbh55.mlab.com:27557/handicraft');

var Schema = mongoose.Schema;
var personSchema = new Schema({
    account: String,
    mail: String,
    comment: String
});

module.exports = mongoose.model('Person',personSchema);