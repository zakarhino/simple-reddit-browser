const express = require('express');
const qs = require('querystring');
const request = require('request');

const router = express.Router();

router.use(function(req, res, next) {
  console.log(`Incoming request ${req.url} to API router.`);
  next();
});

router.get('/board/*', function(req, res, next) {
  const board = req.url.split('/')[2];
  request(`https://www.reddit.com/r/${board}.json`, (err, request, body) => {
    const data = JSON.parse(body);
    if(data.error || !data.data.children.length) {
      res.status(404).send({ error: 404, board: board, status: `Could not access or find the board ${board}` });
    } else {
      res.status(200).send(data);
    }
  });
});

module.exports = router;