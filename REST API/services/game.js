const Game = require('../models/Game');

async function addGame(gameData) {

    const game = new Game(gameData);

    await game.save();

    return game;
}

async function getAllGames() {

    const game = await Game.find().lean();

    return game;
}


module.exports = {
    addGame,
    getAllGames
};