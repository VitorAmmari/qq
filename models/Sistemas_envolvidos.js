const Sequelize = require("sequelize")
const db = require("./db")

const Sistemas_envolvidos = db.define("sistemas_envolvidos", {
  nome: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = Sistemas_envolvidos