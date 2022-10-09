const express = require('express');

let conversation = [];

const createMessage = function(actor, message) {
  return {
    actor,
    message
  };
}

// Constants
const PORT = 8080;

// App
const app = express();
app.use(express.json());

app.use('/', express.static('public'))

app.post('/', (req, res) => {
  console.log(req.body);
  const { actor, message } = req.body;
  conversation.push(createMessage(actor, message))
  res.json(conversation);
});

app.get('/convo', (req, res) => {
  res.json(conversation);
})

app.get('/delete', (req, res) => {
  conversation = [];
  res.send("ok");
});

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});