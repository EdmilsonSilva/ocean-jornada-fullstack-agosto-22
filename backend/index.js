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

app.listen(3000);
