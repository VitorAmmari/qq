const express = require("express")
const app = express()
const PORT = 3333
const User = require("../models/User")

app.use(express.json())
app.use(express.static(__dirname + "/css"))
app.use(express.static(__dirname + "/images"))

app.get("/home", async(req, res) => {
  res.sendFile(__dirname + "/pages/login.html")
})

app.get("/index", async(req, res) => {
  res.sendFile(__dirname + "/pages/index.html")
})

app.get("/index2", async(req, res) => {
  res.sendFile(__dirname + "/pages/index-2.html")
})

app.get("/cadastrar", async(req, res) => {
  res.sendFile(__dirname + "/pages/cadastro.html")
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
  await User.create(req.body)
  .then(() => {
    return res.json({
      erro: false,
      mensagem: "Usuário cadastrado com sucesso!"
    })
  }).catch(() => {
    return res.status(400).json({
      erro: true,
      mensagem: "Erro: Usuário não cadastrado com sucesso!"
    })
  })
  
  res.redirect("/cadastrar")
  res.send("Página Cadastrar")
})

app.listen(PORT, () => console.log(`Servidor está rodando na Porta ${PORT}`))