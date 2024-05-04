const router = require('express').Router();
const contactController = require('../controllers/contactController');

router.get('/', contactController.index);

router.get('/:id', contactController.show);

router.post('/', contactController.create);

router.put('/:id', contactController.update);

router.delete('/:id', contactController.destroy);

module.exports = router;
