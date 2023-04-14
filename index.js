const express = require('express');

const app = express()

app.use(express.json());


app.get('/user', (req, res) => {
  // enviar a lista de usuarios para client
})

app.post('/user', (req, res) => {
  // pegar o body da requisição
  // implementar na lista de usuarios
  // retornar resposta pro client
})

app.listen(3000, () => {
  console.log('server started on port 3000');
})