const Sequelize = require('sequelize');
require('dotenv').config();
console.log('process.env.DB_NAME', process.env.DB_NAME);
console.log('process.env.DB_USER', process.env.DB_USER);
console.log('process.env.DB_PASSWORD', process.env.DB_PASSWORD);
let sequelize;

const DB_NAME = 'blog_db';
const DB_USER = 'root';
const DB_PASSWORD = 'root';

if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
    sequelize = new Sequelize(
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PASSWORD,
        {
            host: 'localhost',
            dialect: 'mysql',
            port: 3306
        }
    );
}

module.exports = sequelize;