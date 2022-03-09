module.exports = async (req, res, next) => {
    try {
        const { email } = req.body;
        const re = /\S+@\S+\.\S+/;
        const toggle = re.test(email);
        if (!email) return res.status(400).send({ message: 'O campo "email" é obrigatório' });
        if (!toggle) {
            return res.status(400)
            .send({ message: 'O "email" deve ter o formato "email@email.com"' });
        }
        next();
    } catch (e) {
        next(e);
    }
};