/* eslint-disable prettier/prettier */
const express = require('express');

const adminroute = express.Router();

const log = (req, res, next) => {
    console.log('I am Loggin Something');
    next();
};
adminroute.all('*', log);

adminroute.get('/', (req, res) => {
    res.send('this is home page');
    console.log(req.baseUrl);
    console.log(req.originalUrl);
    console.log(req.ip);
    console.log(req.hostname);
});
adminroute.get('/dashboard', (req, res) => {
    res.send('this is dashboard page');
    console.log(req.baseUrl);
    console.log(req.originalUrl);
    console.log(req.ip);
    console.log(req.hostname);
});

module.exports = adminroute;
