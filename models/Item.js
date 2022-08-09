const db = require('./db');

const Item = db.sequelize.define("items", {
    id_item: {
        type: db.Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    id_categoryF: {
        type: db.Sequelize.INTEGER,
        references: {
          model: 'categories',
          key: 'id_category',
          deferrable: db.Sequelize.Deferrable.INITIALLY_IMMEDIATE,
        }
    },
    name: {
        type: db.Sequelize.STRING,
        allowNull: false,
    }
});

//Item.sync({force: true});

module.exports = Item;