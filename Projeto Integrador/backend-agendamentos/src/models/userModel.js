const db = require("../config/db");

const User = {

  criar: (usuario, senha, callback) => {
    const sql =
      "INSERT INTO usuarios (usuario, senha) VALUES (?, ?)";

    db.query(sql, [usuario, senha], callback);
  },

  buscarPorUsuario: (usuario, callback) => {
    const sql =
      "SELECT * FROM usuarios WHERE usuario = ?";

    db.query(sql, [usuario], callback);
  }
};

module.exports = User;