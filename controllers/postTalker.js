const { writeFile } = require('fs/promises');
const readFileModule = require('../middleware/readFileModule');

module.exports = async (req, res, next) => {
    try {
        const talkers = await readFileModule();
        const id = talkers.length + 1;
        const { name, age, talk } = req.body;
        const newTalker = { id, name, age, talk };
        talkers.push(newTalker);
        await writeFile('talker.json', JSON.stringify(talkers));

    return res.status(201).json(newTalker);
    } catch (e) {
        next(e);
}
};