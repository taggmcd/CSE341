// Express
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const url = process.env.URL || 'localhost';
const swaggerAutogen = require('./swagger');

app.use(bodyParser.json());

// Database
const mongodb = require('./database/mongodb.js');

// Set CORS headers
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Z-Key'
  );
  next();
});
// Routes
app.use('/', require('./routes'));

// Connect to MongoDB and start the server
mongodb.init((err) => {
  if (err) {
    console.error(err);
  }
  console.log('Connected to MongoDB');

  app.listen(port, () => {
    console.log(`Server is running at http://${url}:${port}`);
  });
});
