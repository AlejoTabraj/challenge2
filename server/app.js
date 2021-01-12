import express from 'express';
import sequelize from './db/database';


//recursos
const  app = express();
const _PORT = process.env.PORT || 5000;





// Instancia del servidor
app.listen(_PORT, _ => {

		sequelize();

		console.log(`El servidor está corriendo en el puerto ${_PORT}`)
})