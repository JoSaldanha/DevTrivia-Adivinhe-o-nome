const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('devTrivia', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate().then(()=>{
    console.log('Conectado com sucesso.');
}).catch((error)=>{
    console.error('Erro na conexão:', error);
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize,
}
