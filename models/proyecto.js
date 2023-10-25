const Sequelize = require('sequelize');

const Poryecto = (sequelize) => {
    sequelize.define('proyecto', {
        idProyecto: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            alloyNull: false
        },
        nombre: Sequelize.STRING(30),
        descripcion: Sequelize.STRING
    })
};

module.exports = Poryecto;