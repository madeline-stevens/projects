// 'use strict';

var express = require('express');
var router = express.Router();

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Express' });
});

module.exports = router;


// var app = app || {};

// (function(module) {
//   const aboutController = {};

//   aboutController.about = () => {
//     $('.tab-content').hide();
//     $('#about').show();

//   };
//   module.aboutController = aboutController;
// })(app);


