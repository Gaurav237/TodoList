const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        enum: ['Personal', 'Work', 'School', 'Other'],
        required: true
    },
    dueDate: {
        type: Date
    }
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;