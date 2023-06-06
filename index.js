const express = require('express');
const port = 8000;

const db = require('./config/mongoose');
const Todo = require('./models/todo');

const app = express();

// setting template engine
app.set('view engine', 'ejs');
app.set('views', './views');

// form data parser
app.use(express.urlencoded({ extended: true }));

// add static files directory
app.use(express.static('assets'));

app.get('/', function(req, res){
    const data = {
        title: 'My Todo List'
    }
    return res.render('home', data);
});

// router for adding new task via form
app.post('/create-task', function(req, res){
    Todo.create({
        description: req.body.description,
        category: req.body.category,
        dueDate: req.body.dueDate
    })
    .then(newTask => {
        console.log('New Task Added : ', newTask);
        return res.redirect('back');
    })
    .catch(err => {
        console.log('error in adding the task : ', err);
        return res.redirect('back');
    })
});

app.listen(port, function(err){
    if(err){
        console.log('error in running server ', err);
        return;
    }
    console.log('express server is running on port : ', port);
});