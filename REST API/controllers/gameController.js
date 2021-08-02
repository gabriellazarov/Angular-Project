const router = require('express').Router();
const Game = require('../models/Game');

const { isGuest, isUser } = require('../middlewares/guards');

router.get('/get', async (req, res) => {
    const games = await req.storage.getAllGames();
    res.status(200).json(games)
});


module.exports = router;