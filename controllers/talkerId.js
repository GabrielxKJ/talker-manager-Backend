const readFileModule = require('../middleware/readFileModule');

module.exports = async (req, res, next) => {
    try {
        const talkers = await readFileModule();
        const { id } = req.params;
        const findId = talkers.find((t) => t.id === Number(id));
        
        if (!findId) return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
        return res.status(200).json(findId);
    } catch (e) {
        next(e);
    }
};