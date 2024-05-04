const swaggerAutogen = require('swagger-autogen')();
const outputFile = './swagger.json';
const endpointsFiles = ['./routes/contacts.js'];
const port = process.env.PORT || 3000;
const url = process.env.URL || 'localhost';

const doc = {
  info: {
    version: '1.0.0',
    title: 'Contacts API',
    description: 'A RESTful API for your contacts.',
  },
  host: `cse341-vw3m.onrender.com`,
  basePath: '/contacts',
  schemes: ['http', 'https'],
};

swaggerAutogen(outputFile, endpointsFiles, doc);
