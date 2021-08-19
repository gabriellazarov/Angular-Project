const { userModel, gameModel } = require('../models');



function getAllGames(req, res, next) {

    gameModel.find()
        .then(posts => {
            res.status(200).json(posts)
        })
        .catch(next);
}

function getFinishedGames(req, res, next) {
    const { userId } = req.params;
    console.log(userId);

    userModel.findById(userId)
        .populate('finishedGames')
        .then(user => {
            res.status(200).json(user.finishedGames)
        })
        .catch(next);
}

function getPlanToPlay(req, res, next) {
    const { userId } = req.params;
    console.log(userId);

    userModel.findById(userId)
        .populate('planToPlay')
        .then(user => {

            res.status(200).json(user.planToPlay)
        })
        .catch(next);
}

function finishGame(req, res, next) {

    const gameId = req.params.gameId;
    const userId = req.body.userId;

    console.log(req.body);
    console.log(gameId);


    userModel.findOneAndUpdate({ _id: userId }, { $pull: { planToPlay: gameId } })
        .then(
            userModel.updateOne({ _id: userId }, { $addToSet: { finishedGames: gameId } }, { new: true })
                .then(() => res.status(200).json({ message: 'Finished game successfuly!' }))
                .catch(next))
}

function planToPlay(req, res, next) {

    const gameId = req.params.gameId;
    const userId = req.body.userId;

    console.log(req.body);
    console.log(gameId);

    removeScore(gameId, userId);

    userModel.updateOne({ _id: userId }, { $pull: { finishedGames: gameId } })
        .then(
            userModel.updateOne({ _id: userId }, { $addToSet: { planToPlay: gameId } }, { new: true })
                .then(() => res.status(200).json({ message: 'Planned game successfuly!' }))
                .catch(next))
}


function scoreGame(req, res, next) {

    const gameId = req.params.gameId;
    const userId = req.body.userId;
    const score = Number(req.body.score);

    console.log(req.body);
    console.log(userId)
    console.log(gameId);

    removeScore(gameId, userId);

    const validNumberScores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    if (score === 'None') {
        return res.status(401).json({ message: 'Score removed!' })
    }
    if (!validNumberScores.includes(score)) {
        return res.status(401).json({ message: 'Score is invalid!' });
    }


    userModel.findById(userId)
        .then(user => {
            if (!user.finishedGames.includes(gameId)) return res.status(401).json({ message: 'Game isn\'t finished!' });
        })
        .then(gameModel.updateOne({ _id: gameId }, { $addToSet: { scores: { userId: userId, score: score } } }, { new: true })
            .then(() => res.status(200).json({ message: 'Scored game successfuly!' })))
        .catch(next)

}

function removeFromLists(req, res, next) {
    const gameId = req.params.gameId;
    const userId = req.body.userId;

    removeScore(gameId, userId);

    Promise.all([
        userModel.findOneAndUpdate({ _id: userId }, { $pull: { finishedGames: gameId } }),
        userModel.findOneAndUpdate({ _id: userId }, { $pull: { planToPlay: gameId } })
    ])
        .then(([deletedOne, _, __]) => {
            if (deletedOne) {
                res.status(200).json(deletedOne)
            } else {
                res.status(401).json({ message: `Not allowed!` });
            }
        })
        .catch(next);
}


///auxilliary functions

function removeScore(gameId, userId) {
    ///mahame any previous score ako ima
    gameModel.updateOne({ _id: gameId }, { $pull: { scores: { userId: userId } } }).then();
}

module.exports = {
    getAllGames,
    getFinishedGames,
    getPlanToPlay,
    finishGame,
    planToPlay,
    scoreGame,
    removeFromLists
}
