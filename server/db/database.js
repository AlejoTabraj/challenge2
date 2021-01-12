import { Sequelize } from 'sequelize';


/*const sequelize = new Sequelize('challenge', 'root', '123456', {
  host: 'localhost',
  dialect: 'mysql'
});*/

var sequelize = new Sequelize("challenge", "root", "12345", {
    host: "localhost",
    dialect: "mysql",
    logging: function () {},
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
    dialectOptions: {
        socketPath: "/var/run/mysqld/mysqld.sock"
    },
    define: {
        paranoid: true
    }
});

sequelize
 .authenticate()
 .then(() => {
  console.info('INFO - Database connected.')
 })
 .catch(err => {
  console.error('ERROR - Unable to connect to the database:', err)
 })


 export default sequelize;