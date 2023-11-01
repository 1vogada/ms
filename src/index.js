const express = require('express');

const app = express();
const port = 3000;
const axios = require('axios');
const cors = require('cors');

app.get('/', (req, res) => {
    res.send('Hello Worl2ds!');
    res.header({
        allow: 'GET, POST, OPTIONS',
        'Content-type': 'application/json',
        Data: Date.now(),
        'Content-length': 0,
    });
});
app.get('/todos', cors(), (req, res) => {
    axios.get("https://jsonplaceholder.typicode.com/todos/1")
        .then(response => {
            res.send(response.data);
        })
        .catch(err => {
            console.log(err);
            res.sendStatus(500);
        });



});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
}); 