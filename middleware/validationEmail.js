module.exports = (req, res, next) => {
    try {
        const { email } = req.body;
        const re = /\S+@\S+\.\S+/;
        const emailToggle = re.test(email);
        if (!email) return res.status(400).send({ message: 'O campo "email" é obrigatório' });
        if (!emailToggle) {
            return res.status(400)
            .send({ message: 'O "email" deve ter o formato "email@email.com"' });
        }
        next();
    } catch (e) {
        next(e);
    }
};