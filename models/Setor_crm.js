const Sequelize = require("sequelize")
const db = require("./db")

const Setor_crm = db.define("setor_crm", {
  nome: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = Setor_crm