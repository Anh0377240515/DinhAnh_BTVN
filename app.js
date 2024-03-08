var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');

var infoRouter = require('./routes/info');
var fundamentalsRouter = require('./routes/fundamentals');
var asyncawaitRouter = require('./routes/async-await');

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/info', infoRouter);
app.use('/fundamentals', fundamentalsRouter);
app.use('/async-await', asyncawaitRouter);

app.use('*',asyncawaitRouter);

module.exports = app;
