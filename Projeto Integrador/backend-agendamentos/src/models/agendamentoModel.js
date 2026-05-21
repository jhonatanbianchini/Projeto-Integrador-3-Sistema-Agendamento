const db = require("../config/db");

const Agendamento = {

  listar: (callback) => {

    db.query(
      "SELECT * FROM agendamentos",
      callback
    );
  },

  criar: (dados, callback) => {

    const sql = `
      INSERT INTO agendamentos
      (nomeCliente, nomeBarbeiro, horario, data)
      VALUES (?, ?, ?, ?)
    `;

    db.query(sql, [
      dados.nomeCliente,
      dados.nomeBarbeiro,
      dados.horario,
      dados.data
    ], callback);
  },

  atualizar: (id, dados, callback) => {

    const sql = `
      UPDATE agendamentos
      SET nomeCliente=?, nomeBarbeiro=?, horario=?, data=?
      WHERE id=?
    `;

    db.query(sql, [
      dados.nomeCliente,
      dados.nomeBarbeiro,
      dados.horario,
      dados.data,
      id
    ], callback);
  },

  deletar: (id, callback) => {

    db.query(
      "DELETE FROM agendamentos WHERE id=?",
      [id],
      callback
    );
  }
};

module.exports = Agendamento;