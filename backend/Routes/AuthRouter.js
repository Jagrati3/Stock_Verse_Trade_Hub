// const router = require('express').Router();

// router.post('/login', (req, res) => {
// res. send('login success');

// });

// router.post('/signup', (req, res) => {
// res.send('signup success');

// });

// module.exports = router;

const router = require('express').Router();

const { signup, login } = require('../Controllers/AuthController');
const { signupValidation, loginValidation } = require('../Middlewares/AuthValidation');

// ✅ validation MUST come before controller
router.post('/signup', signupValidation, signup);
router.post('/login', loginValidation, login);

module.exports = router;