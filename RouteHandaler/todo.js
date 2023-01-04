/* eslint-disable prettier/prettier */
const express = require('express');
const mongoose = require('mongoose');
const todoSchema = require('../Schema/todoSchema');

const router = express.Router();
// eslint-disable-next-line new-cap
const Todo = new mongoose.model('Todo', todoSchema);

router.get('/', async (req, res) => {
    res.send('this is todo page');
});
router.get('/:id', async (req, res) => {
    res.send('this is home page');
});
router.post('/', async (req, res) => {
    const newTodo = new Todo(req.body);
    await newTodo.save((err) => {
        if (err) {
            res.status(500).json({
                error: 'Server site error',
                err,
            });
        } else {
            res.status(200).json({
                message: 'save success',
            });
        }
    });
});
router.post('/all', async (req, res) => {
    res.send('this is home page');
});
router.put('/:id', async (req, res) => {
    res.send('this is home page');
});
router.delete('/:id', async (req, res) => {
    res.send('this is home page');
});
module.exports = router;
