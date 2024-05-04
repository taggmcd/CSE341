const swaggerAutogen = require('swagger-autogen')();
const outputFile = './swagger.json';
const endpointsFiles = ['./routes/contacts.js'];
const port = process.env.PORT || 3000;

const doc = {
  info: {
    version: '1.0.0',
    title: 'Contacts API',
    description: 'A RESTful API for your contacts.',
  },
  host: `localhost:${port}`,
  basePath: '/',
  schemes: ['http', 'https'],
};

swaggerAutogen(outputFile, endpointsFiles, doc);
