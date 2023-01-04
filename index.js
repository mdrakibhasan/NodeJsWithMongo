/* eslint-disable prettier/prettier */
const express = require('express');
const mongoose = require('mongoose');
const adminroute = require('./admin');
const Todohandler = require('./RouteHandaler/todo');

const app = express();
app.use(express.json());
mongoose.connect('mongodb://0.0.0.0:27017/todos', {
    useNewUrlParser: true, useUnifiedTopology: true,
}, (err) => {
    if (err) {
        console.log('error', err);
    } else {
        console.log('Connected');
    }
});
// .then(() => console.log('Connected')).catch((err) => console.log('error', err));

app.use('/admin', adminroute);
app.use('/todo', Todohandler);
app.get('/user', (req, res) => {
    res.send('this is page');
    console.log('this is connect');
});

 app.listen(3000, () => {
    console.log('this is connect');
 });
