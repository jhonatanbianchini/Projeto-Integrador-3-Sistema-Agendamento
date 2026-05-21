const Agendamento =
  require("../models/agendamentoModel");

exports.listar = (req, res) => {

  Agendamento.listar((err, results) => {

    if (err) {
      return res.status(500).json(err);
    }

    res.json(results);
  });
};

exports.criar = (req, res) => {

  Agendamento.criar(req.body, (err) => {

    if (err) {
      return res.status(500).json(err);
    }

    res.json({
      mensagem: "Agendamento criado"
    });
  });
};

exports.atualizar = (req, res) => {

  Agendamento.atualizar(
    req.params.id,
    req.body,
    (err) => {

      if (err) {
        return res.status(500).json(err);
      }

      res.json({
        mensagem: "Agendamento atualizado"
      });
    }
  );
};

exports.deletar = (req, res) => {

  Agendamento.deletar(
    req.params.id,
    (err) => {

      if (err) {
        return res.status(500).json(err);
      }

      res.json({
        mensagem: "Agendamento removido"
      });
    }
  );
};