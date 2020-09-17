const express = require('express');
const apiRouter = express.Router();
const checkMillionDollarIdea = require('./checkMillionDollarIdea.js');
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

apiRouter.put('/minions/:minionId', (req, res, next) => {
	let minion = updateInstanceInDatabase('minions', req.body);
	if (minion) {
		res.status(202).send(minion);
	} else {
		res.status(404).send();
	}
});

apiRouter.delete('/minions/:minionId', (req, res, next) => {
	let minion = deleteFromDatabasebyId('minions', req.params.minionId);
	if (minion) {
		res.status(204).send(minion);
	} else {
		res.status(404).send("Minion is not found.");
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

apiRouter.post('/ideas', checkMillionDollarIdea, (req, res, next) => {
	if (req.body) {
		let mins = addToDatabase('ideas', req.body);
		res.status(201).send(mins);
	} else {
		res.status(404).send();
	}
});

apiRouter.put('/ideas/:ideaId', (req, res, next) => {
	if (req.body) {
		let idea = updateInstanceInDatabase('ideas', req.body);
		if (idea) {
			res.status(202).send(idea);
		} else {
			res.status(404).send("An error during DB rendering has occured!");
		}
	} else {
		res.status(404).send("Your request was handled by server but does contain a mistake!");
	}
});

apiRouter.delete('/ideas/:ideaId', (req, res, next) => {
	let idea = deleteFromDatabasebyId('ideas', req.params.ideaId);
	if (idea) {
		res.status(204).send(idea);
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

apiRouter.post('/meetings', (req, res, next) => {
	if (req.body) {
		let meeting = addToDatabase('meetings', createMeeting());
		if (meeting === null)
			res.status(404).send("Pyzdets");
		res.status(201).send(meeting);
	} else {
		res.status(404).send("Invalid input *** Handled by API");
	}
});

apiRouter.delete('/meetings', (req, res, next) => {
	let mins = deleteAllFromDatabase('meetings');
	if (mins) {
		res.status(204).send(mins);
	} else {
		res.status(404).send();
	}
});

module.exports = apiRouter;
