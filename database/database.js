const Sequelize = require("sequelize");

const connection = new Sequelize("blog", "root", "#Renault88", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = connection;
