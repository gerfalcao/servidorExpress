const Sequelize = require('sequelize');
const sequelize = new Sequelize('sistemaDeCadastro', 'root', '37b4a1060', {
  host: 'localhost',
  dialect: 'mysql'
})

sequelize.authenticate().then(function(){
  console.log('Conectado com sucesso');
}).catch(function(erro){
  console.log('Falha ao se conectar: '+erro)
})

// Criar tabela de postagem
const Postagem = sequelize.define('postagens', {
  titulo: {
    type: Sequelize.STRING
  },
  conteudo:{
    type: Sequelize.TEXT
  }
})


// Postagem.sync({force: true})

Postagem.create({
  titulo: "Um titulo qualquer",
  conteudo: "Um conteúdo qualquer"
})




const Ferramentas = sequelize.define('ferramentas', {
  nome: {
    type: Sequelize.STRING
  },
  peso: {
    type: Sequelize.INTEGER
  },
  preco: {
    type: Sequelize.FLOAT
  }
})

Ferramentas.create({
  nome: 'Manivela',
  peso: 2,
  preco: 15.50
})
// Ferramentas.sync({force:true})

// Usuarios