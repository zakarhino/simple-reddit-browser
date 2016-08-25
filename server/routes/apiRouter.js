const express = require('express');
const qs = require('querystring');

const router = express.Router();

router.use(function(req, res, next) {
  console.log(`Incoming request ${req.url} to API router.`);
  next();
});

router.get('/board/*', function(req, res, next) {
  console.log('url', req.url);
  res.send('hello world');
});

router.get('/profile/*', function(req, res, next) {

});

module.exports = router;