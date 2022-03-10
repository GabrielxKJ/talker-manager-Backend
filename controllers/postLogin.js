// const validationEmail = require('../middleware/validationEmail');
// const validationPassword = require('../middleware/validationPassword');

module.exports = async (req, res, next) => {
    try {
        // validationEmail(req, res, next);
        // validationPassword(req, res, next);
        return res.status(200).json({ token: '7mqaVRXJSp886CGr' });
    } catch (e) {
        next(e);
    }
};