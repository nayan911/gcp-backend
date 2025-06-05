const mysql = require('mysql2');
const dotenv = require('dotenv');
dotenv.config();

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
}).promise();

const getAllDetails = async () => {
    try {
        const [results] = await pool.query('SELECT * from details');
        return results;
    } catch (error) {
        console.error('Error executing query:', error);
        throw error;
    }
}

module.exports = {
    pool,
    getAllDetails
}