const express = require("express");

const router = express.Router();

const controller =
  require("../controllers/agendamentoController");

const auth =
  require("../middleware/authMiddleware");

router.get(
  "/",
  auth,
  controller.listar
);

router.post(
  "/",
  auth,
  controller.criar
);

router.put(
  "/:id",
  auth,
  controller.atualizar
);

router.delete(
  "/:id",
  auth,
  controller.deletar
);

module.exports = router;