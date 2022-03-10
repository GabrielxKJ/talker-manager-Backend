const express = require('express');
const bodyParser = require('body-parser');
const controllers = require('./controllers');

const { 
  validationNewAge,
  validationNewDate,
  validationNewName,
  validationNewToken,
  validationNewRate,
  validationNewTalk,
  } = require('./middleware/index');

const app = express();

app.use(bodyParser.json());
const HTTP_OK_STATUS = 200;
const PORT = '3000';

app.get('/talker', controllers.listTalker);

app.get('/talker/search', validationNewToken, controllers.getTalkerSearch);

app.get('/talker/:id', controllers.talkerId);

app.post('/login', controllers.postLogin);

app.post('/talker', 
validationNewToken,
validationNewName,
validationNewAge,
validationNewTalk,
validationNewDate,
validationNewRate,
 controllers.postTalker);

app.put('/talker/:id',
validationNewToken,
validationNewName,
validationNewAge,
validationNewTalk,
validationNewDate,
validationNewRate,
 controllers.putTalker);

app.delete('/talker/:id', validationNewToken, controllers.deleteTalker); 

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.listen(PORT, () => {
  console.log('Online');
});
