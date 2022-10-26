const Sequelize = require("sequelize")
const db = require("./db")

const Area = db.define("area", {
  nome: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = Area