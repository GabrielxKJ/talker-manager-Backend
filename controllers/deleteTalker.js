const { writeFile } = require('fs/promises');
const readFileModule = require('../middleware/readFileModule');

module.exports = async (req, res, next) => {
try {
    const talkers = await readFileModule();
    const { id } = req.params;
    const deleteTalkerById = talkers.filter((talker) => Number(talker.id) !== Number(id));

    await writeFile('./talker.json', JSON.stringify(deleteTalkerById));

    return res.status(204).end();
  } catch (error) {
    next(error);
  }
};