var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Land = mongoose.model('Land');
var Quiz = mongoose.model('Quiz');

// REST routes worden hier gedefinieerd

// Uitleg REST service
router.get('/api', function(req, res) {
  res.json(({'Gebruik': 'Testen van REST routes'}))
});

// GET - landen (allemaal)
router.get('/api/landen', function(req, res, next) {
  Land.find(function(err,landen) {
    if(err) {
      return next(err);
    }
    console.log('Landen worden opgevraagd');
    res.json(landen);
  })
});

router.get('/api/landen/:id', function(req,res,next) {
  var query = Land.findOne({naam:})
});

router.post('/api/landen', function(req,res,next) {
  var land = new Land(req.body);
  land.save(function(err,land) {
    if(err) {
      return next(err);
    }
    res.json(land);
  })
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Configureren van Router POSTing

router.param('post', function(req,res,next,id) {
  var query = Land.findById(id);

  query.exec(function(err,post))
})

module.exports = router;
