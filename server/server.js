const express = require('express');
const applyMiddleware = require('./middleware.js');

const PORT = process.env.PORT || 3000;

const app = express();

applyMiddleware(app);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
})