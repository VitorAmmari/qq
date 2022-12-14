const Sequelize = require("sequelize")
const Crm = require("./Crm")
const db = require("./db")

const User = db.define("usuarios", {
  matricula: {
    type: Sequelize.STRING,
    allowNull: false,
    primaryKey: true
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false
  },
  sobrenome: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  senha: {
    type: Sequelize.STRING,
    allowNull: false
  },
  setor: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = User