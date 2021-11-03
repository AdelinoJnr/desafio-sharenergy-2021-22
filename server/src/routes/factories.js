const Factory = require('../controllers/factories');
const router = require('express').Router();

router.get('/', Factory.getAll);
router.get('/:id', Factory.getById);
router.post('/limit', Factory.getLimit);
router.post('/many', Factory.createMany);

module.exports = router;