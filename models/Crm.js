const Sequelize = require("sequelize")
const db = require("./db")
const User = require("./User")

const Crm = db.define("crm", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  versao: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  demanda: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  objetivo: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  justificativa: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  alternativa: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  offs: {
    type: Sequelize.TEXT,
    allowNull: true
  },
  data_legal: {
    type: Sequelize.STRING,
    allowNull: false
  },
  data_inicio: {
    type: Sequelize.DATE,
    allowNull: true
  },
  data_fim: {
    type: Sequelize.DATE,
    allowNull: true
  },
  dependencia: {
    type: Sequelize.STRING,
    allowNull: false
  },
  txt_dependencia: {
    type: Sequelize.TEXT,
    allowNull: true
  },
  impacto: {
    type: Sequelize.TEXT,
    allowNull: true
  },
  anexos: {
    type: Sequelize.BLOB,
    allowNull: true
  },
  setor_crm: {
    type: Sequelize.STRING,
    allowNull: false
  },
  sistemas_envolvidos: {
    type: Sequelize.STRING,
    allowNull: false
  },
  complexidade: {
    type: Sequelize.STRING,
    allowNull: false
  },
  setores_envolvidos: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = Crm