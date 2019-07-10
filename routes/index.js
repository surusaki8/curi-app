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

router.get('/boards/:_id', function(req, res, next) {
  Cari.findOne({_id: req.params._id},function(err,docs) {
    //res.render('list',{'arrayForm': docs});
    console.log(docs);
    res.render('boards', {'board': docs});
  });
});

router.get('/moga/:_id', function(req, res, next) {
  Cari.findOne({_id: req.params._id},function(err,docs) {
    console.log(docs);
    res.render('moga', {'docs': docs});
  });
});

router.post('/moga/:_id', function(req, res, next) {
  console.log(req.body.message);
  var _id = req.params._id;
  console.log(_id);
  try{
  Cari.updateOne({"_id": _id},{"$push":{message: req.body.message}},function(err,result) {
    if(!err) {
      return res.redirect('/moga/' + _id);
    } else {
      console.log(err.messe);
    }
  })
} catch {

}
});


module.exports = router;
