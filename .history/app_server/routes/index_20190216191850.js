var express = require('express');
var router = express.Router();

/* GET home page. */
var homepageController = function(req, next) {
  res.render('index', {title: 'Express'});
}
router.get('./', homepageController);
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Orient Express :)' });
// });

module.exports = router;
