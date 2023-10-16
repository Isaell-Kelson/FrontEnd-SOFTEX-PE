const Sequelize = require('sequelize')
const sequelize = new Sequelize('teste', 'root', 'sdasds', {
    host:"localhost",
    dialect: 'mysql'
})

sequelize.authenticate().then(function(){
    console.log("Conexão realizada com sucesso!")
}).catch(function(erro){
    console.log("Falha na conexão: "+erro)
})