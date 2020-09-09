const express = require('express');
const apiRouter = express.Router();
const {
	createMeeting,
	getAllFromDatabase,
	getFromDatabaseById,
	addToDatabase,
	updateInstanceInDatabase,
	deleteFromDatabasebyId,
	deleteAllFromDatabase,
} = require('./db.js');

apiRouter.get('/minions', (req, res, next) => {
	let mins = getAllFromDatabase('minions');
	if (mins) {
		res.send(mins);
	} else {
		res.status(404).send();
	}
});

apiRouter.post('/minions', (req, res, next) => {
	if (req.body) {
		let mins = addToDatabase('minions', req.body);
		res.status(201).send(mins);
	} else {
		res.status(404).send();
	}
});

apiRouter.get('/minions/:minionId', (req, res, next) => {
	let minion = getFromDatabaseById('minions', req.params.minionId);
	if (minion) {
		res.send(minion);
	} else {
		res.status(404).send();
	}
});

apiRouter.get('/ideas', (req, res, next) => {
	let mins = getAllFromDatabase('ideas');
	if (mins) {
		res.send(mins);
	} else {
		res.status(404).send();
	}
});

apiRouter.get('/ideas/:ideaId', (req, res, next) => {
	let idea = getFromDatabaseById('ideas', req.params.ideaId);
	if (idea) {
		res.send(idea);
	} else {
		res.status(404).send();
	}
});

apiRouter.get('/meetings', (req, res, next) => {
	let mins = getAllFromDatabase('meetings');
	if (mins) {
		res.send(mins);
	} else {
		res.status(404).send();
	}
});

module.exports = apiRouter;
