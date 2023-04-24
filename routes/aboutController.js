'use strict';

// // const express = require('express')
// // const app = express()

// // app.get('/about', (req, res) => {
// //   res.send('about')
// // })



// // ----
// // var express = require('express');
// // var router = express.Router();

// // /* GET about page. */
// // router.get('/about', function(req, res, next) {
// //   res.render('about', { title: 'Express' });
// // });

// // module.exports = router;
// // ---
// const express = require('express');
// const router = espress.Router()
// // const app = express()



// router.get ("/", (req, res) => {
//   res.send ({ data: "here is your data"})
// })

// module.exports = router;

// old working site 
var app = app || {};

(function(module) {
  const aboutController = {};

  aboutController.about = () => {
    $('.tab-content').hide();
    $('#about').show();

  };
  module.aboutController = aboutController;
})(app);


