// 用來處理 DB 連線
// 建立資料模型
var mongoose = require('mongoose');
mongoose.connect('mongodb://list_test:test@ds141410.mlab.com:41410/username');

var Schema = mongoose.Schema;
var personSchema = new Schema({
    username : String,
    password : String
});


module.exports = mongoose.model('Person',personSchema);

