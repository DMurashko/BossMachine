const checkMillionDollarIdea = (req, res, next) => {
	if (Number(req.body.weeklyRevenue) * Number(req.body.numWeeks) >= 1000000)
		next();
	else
		res.status(400).send('Not a 1mln USD idea!');
};

// Leave this exports assignment so that the function can be used elsewhere
module.exports = checkMillionDollarIdea;
