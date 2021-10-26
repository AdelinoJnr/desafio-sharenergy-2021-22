const Factory = require('../controllers/factorys');
const router = require('express').Router();

router.get('/', Factory.getAll);
router.get('/:id', Factory.getById);

module.exports = router;