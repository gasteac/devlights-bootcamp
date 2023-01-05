import Sequelize from 'sequelize';
import config from './config.js';

const db = new Sequelize(config.DB_NAME, config.DB_USER, config.DB_PASSWORD, {
    dialect: 'mysql',
    port: config.DB_PORT
  })

export default db;