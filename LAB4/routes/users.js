var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var users=['balwinder'];

     res.render('users', { title: 'Users', users: users });

});
module.exports = router;
