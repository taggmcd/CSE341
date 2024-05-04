const swaggerAutogen = require('swagger-autogen')();
const outputFile = './swagger.json';
const endpointsFiles = ['./routes/contacts.js'];

const doc = {
  info: {
    version: '1.0.0',
    title: 'Contacts API',
    description: 'A RESTful API for your contacts.',
  },
  host: 'localhost:3000',
  basePath: '/',
  schemes: ['http', 'https'],
};

swaggerAutogen(outputFile, endpointsFiles, doc);
