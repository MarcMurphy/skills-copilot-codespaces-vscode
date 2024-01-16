// Create web server
// 1. npm init -y
// 2. npm i express
// 3. node comments.js

const express = require('express');
const app = express();

// GET /comments
app.get('/comments', (req, res) => {
    res.send('GET /comments');
});

// POST /comments
app.post('/comments', (req, res) => {
    res.send('POST /comments');
});

// GET /comments/:id
app.get('/comments/:id', (req, res) => {
    res.send('GET /comments/:id');
});

// PUT /comments/:id
app.put('/comments/:id', (req, res) => {
    res.send('PUT /comments/:id');
});

// DELETE /comments/:id
app.delete('/comments/:id', (req, res) => {
    res.send('DELETE /comments/:id');
});

// Start server
app.listen(3000, () => {
    console.log('Server started');
});