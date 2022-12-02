const { Router } = require('express');
const { userRegister } = require('../controllers/user.controller');

const router = Router();

router.post('/users', userRegister);

module.exports = router;
