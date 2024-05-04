// Express
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// Database
const mongodb = require('./database/mongodb.js');

// Routes
app.use('/', require('./routes'));

// Connect to MongoDB and start the server
mongodb.init((err) => {
  if (err) {
    console.error(err);
  }
  console.log('Connected to MongoDB');

  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
});
