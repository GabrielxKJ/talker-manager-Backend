const { readFile } = require('fs/promises');

module.exports = async (_req, res, next) => {
    try {
        const talkers = await readFile('./talker.json', 'utf8');
        const parsed = JSON.parse(talkers);
        return res.status(200).json(parsed);
    } catch (e) {
        return next(e);
    }
};