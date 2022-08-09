const db = require('./db');

const Category = db.sequelize.define("categories", {
    id_category: {
        type: db.Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: db.Sequelize.STRING,
        allowNull: false,
    }
});

//Category.sync({force: true});

/*Category.create({
    name: 'Categoria',
});*/

module.exports = Category;
