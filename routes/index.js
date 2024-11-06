var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'home'
  });
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { 
    title: 'home'
  });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('index', { 
    title: 'about me'
  });
});

/* GET project page. */
router.get('/project', function(req, res, next) {
  res.render('index', { 
    title: 'my project'
  });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('index', { 
    title: 'contact us'
  });
});

module.exports = router;
