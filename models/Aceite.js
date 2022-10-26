const Sequelize = require("sequelize")
const db = require("./db")

const Aceite = db.define("aceite", {
  idhomologacao: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  motivo: {
    type: Sequelize.TEXT,
    allowNull: true
  },
  estado: {
    type: Sequelize.STRING,
    allowNull: true
  }
})

module.exports = Aceite