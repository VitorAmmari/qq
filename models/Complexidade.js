const Sequelize = require("sequelize")
const db = require("./db")

const Complexidade = db.define("complexidade", {
  nome: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = Complexidade