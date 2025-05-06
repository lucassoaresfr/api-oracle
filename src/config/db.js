// config/conexao.js
const oracledb = require('oracledb');
require('dotenv').config();

async function conectarBanco() {
  try {
    const connection = await oracledb.getConnection({
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      connectString: process.env.DB_CONNECTION_STRING //teste para depuração 
    });
    return connection;
  } catch (error) {
    console.error('Erro ao conectar ao banco de dados:', error);
    throw error;
  }
}

module.exports = { conectarBanco };
