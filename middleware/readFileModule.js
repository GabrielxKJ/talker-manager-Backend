const { readFile } = require('fs/promises');

module.exports = async () => {
    const talkers = await readFile('./talker.json', 'utf8');
    const parsed = JSON.parse(talkers);
    return parsed;
};