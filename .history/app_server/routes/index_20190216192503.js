var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main');

/* GET home page. */
router.get('./', ctrlMain.index);
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Orient Express' });
// });

module.exports = router;
