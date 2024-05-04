const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('Hello World');
});

router.use('/api-docs', require('./swagger'));

router.use('/contacts', require('./contacts.js'));

module.exports = router;
