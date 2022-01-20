const router = require('express').Router();
const passport = require('passport');
const passwordUtils = require('../lib/passwordUtils');
const { loginPost, registerPost, home, login, register, protected, logout, success, failure } = require('../controllers/auth');


router.post('/login', passport.authenticate('local'), loginPost);
router.post('/register', registerPost);

router.get('/', home);
router.get('/login', login);
router.get('/register', register);
router.get('/protected-route', protected);
router.get('/logout', logout);
router.get('/login-success', success);
router.get('/login-failure', failure);

module.exports = router;