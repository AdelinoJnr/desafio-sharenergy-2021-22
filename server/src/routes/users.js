const User = require('../controllers/users');
const router = require('express').Router();

router.post('/', User.create);
router.get('/search', User.getByEmail);
router.get('/', User.getAll);
router.get('/:id', User.getById);
router.put('/:id', User.update);
router.delete('/:id', User.remove);

module.exports = router;