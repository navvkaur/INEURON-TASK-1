import * as dotenv from 'dotenv'
dotenv.config()

const Sequelize = require('Sequelize');

const sequelize = new Sequelize(process.env.Database,'root',process.env.password,{
  dialect :'mysql',
  host: 'localhost'
});

export default sequelize;