const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const session = require("express-session")

const PORT = 3333

const User = require("../models/User")
const Aceite = require("../models/Aceite")
const Crm = require("../models/Crm")

let login = "admin"
let password = 123456

app.use(express.json())

app.use(session({secret: "segredo"}))

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(express.static(__dirname + "/css"))
app.use(express.static(__dirname + "/images"))
app.use(express.static(__dirname + "/js"))

app.get("/", async(req, res) => {
  if(req.session.entrar) {
   res.sendFile(__dirname + "/pages/index.html")
  } else {
    res.sendFile(__dirname + "/pages/login.html")
  }
})

app.get("/e", async(req, res) => {
  res.sendFile(__dirname + "/pages/loogin.html")
})

app.get("/home", async(req, res) => {
  res.sendFile(__dirname + "/pages/index.html")
})

app.get("/home2", async(req, res) => {
  res.sendFile(__dirname + "/pages/index-2.html")
})

app.get("/hhome", async(req, res) => {
  res.sendFile(__dirname + "/pages/indexcrm.html")
})

app.get("/cadastrar", async(req, res) => {
  res.sendFile(__dirname + "/pages/cadastro.html")
})

app.get("/cadastraar", async(req, res) => {
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

app.post("/", async(req, res) => {
  if(req.body.senhada == password && req.body.entrar == login) {
    req.session.entrar = login

    res.sendFile(__dirname + "/pages/index.html")

  } else {
    res.sendFile(__dirname + "/pages/loogin.html")
  }
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
    res.redirect("/cadastraar")
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
    anexos: req.body.anexos,
    setor_crm: req.body.setorcrm,
    sistemas_envolvidos: JSON.stringify(req.body.sistemas),
    complexidade: req.body.complex,
    setores_envolvidos: JSON.stringify(req.body.setores)
  })
  .then(() => {
    res.redirect("/hhome")
  }).catch((e) => {
    res.send("Erro: CRM não foi registrada" + e)
  })
})

app.listen(PORT, () => console.log(`Servidor está rodando na Porta ${PORT}`))