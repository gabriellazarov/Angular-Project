const Game = require('../models/Game');

async function addGame(gameData) {

    const game = new Game(gameData);

    await game.save();

    return game;
}

async function getAllGames() {

    const games = await Game.find().lean();

    return games;
}


module.exports = {
    addGame,
    getAllGames
};