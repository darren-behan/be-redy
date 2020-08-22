const dotenv = require("dotenv");
dotenv.config();
module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.PORT,
    dialect: process.env.DB_MYSQL
  },
  test: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.PORT,
    dialect: process.env.DB_MYSQL
  },
  production: {
    use_env_variable: process.env.JAWSDB_URL,
    dialect: process.env.DB_MYSQL
  }
};
