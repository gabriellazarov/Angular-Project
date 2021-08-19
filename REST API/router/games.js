const express = require('express');
const router = express.Router();
const { auth } = require('../utils');
const { gameController } = require('../controllers');

// middleware that is specific to this router

router.get('/get', gameController.getAllGames);

router.get('/finished/:userId', auth(), gameController.getFinishedGames);

router.get('/planned/:userId', auth(), gameController.getPlanToPlay);

router.put('/finish/:gameId', auth(), gameController.finishGame);

router.put('/plan/:gameId', auth(), gameController.planToPlay);

router.post('/score/:gameId', auth(), gameController.scoreGame);

router.post('/remove/:gameId', auth(), gameController.removeFromLists);


module.exports = router