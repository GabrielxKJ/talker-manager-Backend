const express = require('express');

const controllers = require('./controllers');

const app = express();

// const bodyParser = require('body-parser');

app.use(express.json());
const HTTP_OK_STATUS = 200;
const PORT = '3000';

app.get('/talker', controllers.listTalker);
// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.listen(PORT, () => {
  console.log('Online');
});
