const express = require('express');
const port = 8000;

const app = express();

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