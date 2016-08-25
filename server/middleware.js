const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const apiRouter = require('./routes/apiRouter');

module.exports = function(app) {
  app.use(express.static(path.join(__dirname, '../public')));
  app.use(bodyParser.json());

  // Setup routes for the api
  app.use('/api', apiRouter);
};