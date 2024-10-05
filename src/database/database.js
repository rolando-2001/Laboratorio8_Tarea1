import { createPool } from 'mysql2/promise';
import { Sequelize } from "sequelize";

// Conexión con mysql2/promise
const pool = createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'data'
});


const db = new Sequelize('data', 'root', '', {
    host: 'localhost',
    dialect: 'mysql', 
    port: 3306,
    define: {
        timestamps: false, 
    },
    pool: {
        max: 5, // Máximo número de conexiones
        min: 0, // Mínimo número de conexiones
        acquire: 30000,
        idle: 10000 
    },
    logging: false, 
});
console.log('Conexión con la base de datos establecida');

export { pool, db };


