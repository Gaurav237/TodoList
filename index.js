const express = require('express');
const port = 8000;

const db = require('./config/mongoose');
const Todo = require('./models/todo');

const app = express();

// setting template engine
app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', function(req, res){
    const data = {
        title: 'My Todo List'
    }
    return res.render('home', data);
});

app.listen(port, function(err){
    if(err){
        console.log('error in running server ', err);
        return;
    }
    console.log('express server is running on port : ', port);
});