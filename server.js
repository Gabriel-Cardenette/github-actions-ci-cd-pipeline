const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para JSON
app.use(express.json());

// Rota de teste (health check)
app.get("/", (req, res) => {
  res.status(200).json({
    message: "API rodando com sucesso 🚀",
    status: "OK",
  });
});

// Rota de teste para CI/CD
app.get("/test", (req, res) => {
  res.status(200).send("Testes executados com sucesso no pipeline!");
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

module.exports = app;