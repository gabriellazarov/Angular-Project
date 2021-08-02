const gameServices = require('../services/game')

module.exports = () => (req, res, next) => {
    req.storage = {
        ...gameServices
    };

    next();
}