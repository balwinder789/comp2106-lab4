var express = require('express');
var router = express.Router();

// My home page
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Lab 4',
  message:'This is my Lab 4'});
});
router.get('/Me', function (req,res,next) {
    //generate random number
    var Me=['My name is Balwinder Singh. I am a student of Georgian College and I am doing 2 years diploma of Computer Programmer '];

    // load the random view
    res.render('Me',{title: 'Me',Me: Me });
})
router.get('/father', function (req,res,next) {
    //generate random number
    var father=['My father name is Gian Singh. He is a farmer '];

    // load the random view
    res.render('Father',{title: 'My Father',father: father });
})
router.get('/mother', function (req,res,next) {
    //generate random number
    var mother=['My mother name is Baljit Kaur. She is a house wife '];

    // load the random view
    res.render('Mother',{title: 'My Mother',mother: mother});
})

router.get('/brother', function (req,res,next) {
  //generate random number
  var brother=['My brother name is Gurmitter Singh. He is a student at CT Polytechnic College '];

  // load the random view
  res.render('brother',{title: 'My Brother',brother: brother });
})

router.get('/sister', function (req,res,next) {
    //generate random number
    var sister=['My Sister name is Simerjit Kaur. She is doing a job in Hospital '];

    // load the random view
    res.render('sister',{title: 'My Sister',sister: sister });
})

module.exports = router;
