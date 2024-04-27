const router = require('express').Router();
const contactController = require('../controllers/contactController');

router.get('/', contactController.index);

router.get('/:id', contactController.show);

module.exports = router;
