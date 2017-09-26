module.exports = (req, res, next) => {
	if(!user.req) {
		return res.status(401).send({ error: 'You must log in!' });
	}

	next();
};