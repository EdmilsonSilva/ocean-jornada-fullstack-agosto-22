const express = require("express");
const morgan = require("morgan");
const compression = require("compression");
const { default: helmet } = require("helmet");
const app = express();

app.use(morgan("dev"));
app.use(compression());
app.use(helmet({
  contentSecurityPolicy: false,
}));
app.disable('x-powered-by');

app.get("/", (_req, res) => {
  res.send("Hello, World!");
});

app.get("/oi", (_req, res) => {
  res.send("Olá, mundo!");
});

// Nosso backend armazena as pontuações das jogadas
// Criar a lista com as pontuações

const lista = [
  {
    id: 1,
    nome: "Paulo",
    pontos: 21,
  },
  {
    id: 2,
    nome: "Daniel",
    pontos: 52,
  },
  {
    id: 3,
    nome: "Beatriz",
    pontos: 97,
  },
];

app.listen(3000);
