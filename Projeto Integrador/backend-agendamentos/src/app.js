const express = require("express");
const cors = require("cors");

require("dotenv").config();

const authRoutes =
  require("./routes/authRoutes");

const agendamentoRoutes =
  require("./routes/agendamentoRoutes");

const app = express();

app.use(cors());

app.use(express.json());

app.use("/auth", authRoutes);

app.use("/agendamentos", agendamentoRoutes);

module.exports = app;