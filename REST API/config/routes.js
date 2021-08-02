const authController = require('../controllers/authController');
const gameController = require('../controllers/gameController');


module.exports = (app) => {
    app.use('/user', authController);
    app.use('/games', gameController);
};