const express = require("express");
const app = express();

app.get("/", (_req, res) => {
  res.send("Hello, World!");
});

app.get("/oi", (_req, res) => {
  res.send("Olá, mundo!");
});

app.listen(3000);
