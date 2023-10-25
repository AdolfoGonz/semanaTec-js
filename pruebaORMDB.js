// Como utilizar la heramienta ORM Sequelize

const Sequelize = require('sequelize');
//Configurar la conexion
// mysql -u admin -h -P 3306 -p

const sequelize = new Sequelize('semanatec', 'admin', 'Tec.01754412OC$', {
    dialect: 'mysql',
    host: 'database-1.cyidz6vue3nx.us-east-1.rds.amazonaws.com',
    define: {
        // Evitar que nos ponga createdAt y updateAt
        timestamps: false,
        // Pluralizar 
        freezeTableName: true
    }
});


const ejemplo = sequelize.define('Ejemplo', {
    idTrabajo: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    descripcion: {
        type: Sequelize.STRING,
        allowNUll: false
    }


});

const ejemplo2 = sequelize.define('Ejemplo2', {
    idTrabajo: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    descripcion: {
        type: Sequelize.STRING,
        allowNUll: false
    }


});


// Prueba de conexion
sequelize.sync()
    .then(result => {
        console.log("Conexión exitosa");
    })
    .catch(error => console.log(error));