const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/User');

const verifyCallback = async (username, password, done) => {
    const user = await User.findOne({ username: username });
    if (!user) return done(null, false);

    const isValid = validPassword(password, user.hash, user.salt);
    if (isValid) return done(null, user);
    else return done(null, false);
}

const strategy = new LocalStrategy(verifyCallback);

module.exports = strategy;