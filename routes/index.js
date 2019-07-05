var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var cariSchema = new Schema({
  title: String,
  message: String,
  date: 
  {
    type: Date,
    default: Date.now
  }
});

var Cari = mongoose.model('caris',cariSchema);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/*post 受け取り*/
router.post('/', function(req, res, next) {
  var cari = new Cari(req.body);
  var body = req.body;
  console.log(body);
  cari.save(function (err) {
    if(err) console.log(err);
  })
});

module.exports = router;
