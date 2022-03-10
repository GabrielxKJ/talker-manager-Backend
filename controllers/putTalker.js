const { writeFile } = require('fs/promises');
const readFileModule = require('../middleware/readFileModule');

module.exports = async (req, res, next) => {
    try {
        const talkers = await readFileModule();

        const { id } = req.params;
        const { name, age, talk } = req.body;
    
        const filteredID = talkers.filter((talker) => Number(talker.id) !== Number(id));
    
        const updateTalker = { id: Number(id), name, age, talk };
        filteredID.push(updateTalker);
    
        await writeFile('./talker.json', JSON.stringify(filteredID));
        return res.status(200).json(updateTalker);
    } catch (e) {
        next(e);
    }
};