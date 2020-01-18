const express = require('express');
const mongoose = require('mongoose');
const PostController = require('./controller/post');
const app = express();

mongoose.connect('mongodb+srv://rizwan:rizwan@cluster0-e9k54.mongodb.net/test');


app.get('/', (request, response) => {
    new PostController().get(request, response);
})

app.post('/', (request, response) => {
    new PostController().post(request, response);
})

app.get('/allpost', (request, response) => {
    new PostController().getAll(request, response);
})

app.listen(3000, () => console.log("server is running localhost:3000"))


// When successfully connected
mongoose.connection.on('connected', function () {
    console.log('Mongoose default connection open to ');
});

// If the connection throws an error
mongoose.connection.on('error', function (err) {
    console.log('Mongoose default connection error: ' + err);
});

// When the connection is disconnected
mongoose.connection.on('disconnected', function () {
    console.log('Mongoose default connection disconnected');
});