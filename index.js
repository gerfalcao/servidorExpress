const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res)=>{
  res.sendFile(__dirname + '/html/index.html');
})

app.get('/sobre', (req, res)=>{
  res.sendFile(__dirname + '/html/sobre.html')
})

app.get('/blog', (req, res)=>{
  res.send('Esse é meu blog')
})

app.get('/ola/:nome/:cargo', (req, res)=>{
  res.send("<h1>Ola "+ req.params.nome+"</h1><br><h2>Seu cargo é "+ req.params.cargo+"</h2>");

})


app.listen(8000, ()=>{
  console.log('Servidor iniciado com sucesso');
})