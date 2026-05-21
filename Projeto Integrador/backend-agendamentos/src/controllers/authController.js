const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/userModel");

exports.registrar = async (req, res) => {

  const { usuario, senha } = req.body;

  try {

    const senhaHash =
      await bcrypt.hash(senha, 10);

    User.criar(usuario, senhaHash, (err) => {

      if (err) {
        return res.status(500).json(err);
      }

      res.json({
        mensagem: "Usuário criado com sucesso"
      });
    });

  } catch (error) {

    res.status(500).json(error);

  }
};

exports.login = (req, res) => {

  const { usuario, senha } = req.body;

  User.buscarPorUsuario(usuario,
    async (err, results) => {

      if (err) {
        return res.status(500).json(err);
      }

      if (results.length === 0) {
        return res.status(401).json({
          mensagem: "Usuário não encontrado"
        });
      }

      const user = results[0];

      const senhaValida =
        await bcrypt.compare(senha, user.senha);

      if (!senhaValida) {
        return res.status(401).json({
          mensagem: "Senha inválida"
        });
      }

      const token = jwt.sign(
        { id: user.id },
        process.env.JWT_SECRET,
        { expiresIn: "1d" }
      );

      res.json({
        mensagem: "Login realizado",
        token
      });
    });
};