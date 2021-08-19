const router = require('express').Router();
const users = require('./users');
const games = require('./games');
const test = require('./test');


router.use('/user', users);
router.use('/games', games);
router.use('/test', test);

module.exports = router;
