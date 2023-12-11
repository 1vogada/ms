import { createClient } from '@supabase/supabase-js';
import key from './key.js';
import axios from 'axios';
import cors from 'cors';
import express from 'express';
import { getAccData } from './controller.js';
import { getAccDataUsername } from './controller.js';


const app = express();
const port = 3000;


app.get('/getAcc', getAccData);
app.get('/getAcc/:author', cors(), getAccDataUsername);

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