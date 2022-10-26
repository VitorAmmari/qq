const express = require("express")
const app = express()
const bodyParser = require("body-parser")

const PORT = 3333

const User = require("../models/User")
const Aceite = require("../models/Aceite")
const Area = require("../models/Area")
const Complexidade = require("../models/Complexidade")
const Crm = require("../models/Crm")
const Setor_crm = require("../models/Setor_crm")
const sistemas_envolvidos = require("../models/Sistemas_envolvidos")

app.use(express.json())

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(express.static(__dirname + "/css"))
app.use(express.static(__dirname + "/images"))

app.get("/", async(req, res) => {
  res.sendFile(__dirname + "/pages/login.html")
})

app.get("/home", async(req, res) => {
  res.sendFile(__dirname + "/pages/index.html")
})

app.get("/home2", async(req, res) => {
  res.sendFile(__dirname + "/pages/index-2.html")
})

app.get("/cadastrar", async(req, res) => {
  res.sendFile(__dirname + "/pages/cadastro.html")
})

app.get("/cadastrar2", async(req, res) => {
  res.sendFile(__dirname + "/pages/cadastro2.html")
})

app.get("/crm", async(req, res) => {
  res.sendFile(__dirname + "/pages/crm.html")
})

app.get("/alterar-senha", async(req, res) => {
  res.sendFile(__dirname + "/pages/senha.html")
})

app.get("/pesquisar", async(req, res) => {
  res.sendFile(__dirname + "/pages/pesquisa.html")
})

app.post("/cadastrar", async(req, res) => {
  await User.create({
    matricula: req.body.matricula,
    nome: req.body.nome,
    sobrenome: req.body.surname,
    email: req.body.mail,
    senha: req.body.senha,
    setor: req.body.area
  })
  .then(() => {
    res.redirect("/cadastrar2")
  }).catch((e) => {
    res.send("Erro: Usuário não foi registrado" + e)
  })
})

app.post("/crm", async(req, res) => {
  await Crm.create({
    versao: 1,
    demanda: req.body.demanda,
    objetivo: req.body.objetivo,
    justificativa: req.body.justificativa,
    alternativa: req.body.alternativa,
    offs: req.body.offline,
    data_legal: req.body.opcao,
    data_inicio: req.body.inicio,
    data_fim: req.body.fim,
    dependencia: req.body.option,
    txt_dependencia: req.body.dependencia,
    impacto: req.body.impacto,
    anexos: req.body.anexos
  })
  .then(() => {
    res.redirect("/home")
  }).catch((e) => {
    res.send("Erro: CRM não foi registrada" + e)
  })
})

app.listen(PORT, () => console.log(`Servidor está rodando na Porta ${PORT}`))