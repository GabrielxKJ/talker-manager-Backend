module.exports = async (req, res, next) => {
    try {
        const { password } = req.body;
        const MINLENGTH = 6;
        if (!password) return res.status(400).send({ message: 'O campo "password" é obrigatório' });
        if (password.length < MINLENGTH) {
        return res
        .status(400).send({ message: 'O "password" deve ter pelo menos 6 caracteres' });
        }
        next();
    } catch (e) {
        next(e);
    }
};