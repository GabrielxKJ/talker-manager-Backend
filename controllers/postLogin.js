const validationEmail = require('../middleware/validationEmail');
const validationPassword = require('../middleware/validationPassowrd');

module.exports = async (req, res, next) => {
    try {
        validationEmail(req, res);
        validationPassword(req, res);
        res.status(200).json({ token: '7mqaVRXJSp886CGr' });
    } catch (e) {
        next(e);
    }
};