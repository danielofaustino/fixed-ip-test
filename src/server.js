const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const router = require('./routes');

const app = express();

app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(router);

module.exports = app;
