const Login = require('../controllers/login');
const router = require('express').Router();

router.post('/', Login.login);

module.exports = router;