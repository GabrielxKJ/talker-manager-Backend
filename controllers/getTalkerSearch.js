const readFileModule = require('../middleware/readFileModule');

module.exports = async (req, res, next) => {
    try {
        const talkers = await readFileModule();
        const { q } = req.query;

        const talkerQuery = talkers.filter((talker) => talker.name.includes(q));

        return res.status(200).json(talkerQuery);
    } catch (e) {
        next(e);
    }
};