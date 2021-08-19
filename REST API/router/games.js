const express = require('express');
const router = express.Router();
const { auth } = require('../utils');
const { gameController } = require('../controllers');

// middleware that is specific to this router

router.get('/get', gameController.getAllGames);

router.get('/finished/:userId', gameController.getFinishedGames);

router.get('/planned/:userId', gameController.getPlanToPlay);

router.put('/finish/:gameId', gameController.finishGame);

router.put('/plan/:gameId', gameController.planToPlay);

router.post('/score/:gameId', gameController.scoreGame);

router.post('/remove/:gameId', gameController.removeFromLists);


module.exports = router