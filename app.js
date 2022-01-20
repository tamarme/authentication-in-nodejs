const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
var passport = require('passport');
var crypto = require('crypto');
var routes = require('./routes');
const connection = require('./config/database');
const MongoStore = require('connect-mongo');
const strategy = require('./config/passport');


passport.use(strategy);

require('dotenv').config();
var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: process.env.SECRET,
    resave: true,
    saveUninitialized: true,
    store: MongoStore.create({
        mongoUrl: process.env.MONGO_URI,
    })
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(routes);

app.listen(3000);