const express = require('express');
const apiRouter = express.Router();
import {
	createMeeting,
	getAllFromDatabase,
	getFromDatabaseById,
	addToDatabase,
	updateInstanceInDatabase,
	deleteFromDatabasebyId,
	deleteAllFromDatabase,
} from './db.js';

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
		addToDatabase('minions', req.body);
		res.status(201).send(mins);
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

apiRouter.get('/meetings', (req, res, next) => {
	let mins = getAllFromDatabase('meetings');
	if (mins) {
		res.send(mins);
	} else {
		res.status(404).send();
	}
});

module.exports = apiRouter;
