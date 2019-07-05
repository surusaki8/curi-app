var express = require('express');
var router = express.Router();
var moment = require('moment');
var Cari = require('../mongooseConnection');

/* GET home page. */
router.get('/', function(req, res, next) {
  Cari.find({}).sort('-date').exec( function(err,docs){
    console.log(docs);
    if(err) console.log(err);
    res.render('index', { 'docs': docs });
  });
});

/*post 受け取り*/
router.post('/', function(req, res, next) {
  var cari = new Cari(req.body);
  var body = req.body
  var createdAt = moment().format('YYYY-MM-DD HH:mm:ss');
  console.log(body);
  console.log(createdAt);
  
  cari.save(function (err) {
    if(err) console.log(err);
    res.redirect('/');
  })
});

module.exports = router;
