module.exports = (req, res, next) => {
    try {
        const { talk: { watchedAt } } = req.body;
        const validateDate = /([0-2][0-9]|3[0-1])\/(0[0-9]|1[0-2])\/[0-9]{4}/;
        if (!watchedAt) {
          return res.status(400)
            .json({
              message:
                'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios',
            });
        }
        if (!validateDate.test(watchedAt)) {
          return res.status(400)
            .json({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
        }
        return next();
      } catch (error) {
        next(error);
      }
};