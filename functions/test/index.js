
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/:id', (request, response) => {
  response.send(`/test/${request.params.id} get ok`);
});

app.post('/', (request, response) => {
  response.send('/test/ post ok');
});

app.put('/:id', (request, response) => {
  response.send(`/test/${request.params.id} put ok`);
});

app.delete('/:id', (request, response) => {
  response.send(`/test/${request.params.id} delete ok`);
});

module.exports = app;
