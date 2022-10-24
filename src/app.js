const express = require("express")
const app = express()
const PORT = 3333
const User = require("../models/User")

app.use(express.json())

app.get("/", async(req, res) => {
  res.send("Página Inicial")
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

  res.send("Página Cadastrar")
})

app.listen(PORT, () => console.log(`Servidor está rodando na Porta ${PORT}`))