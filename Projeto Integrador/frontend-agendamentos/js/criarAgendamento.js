const token =
  localStorage.getItem("token");

if (!token) {
  window.location.href =
    "../index.html";
}

async function criarAgendamento() {

  const nomeCliente =
    document.getElementById(
      "nomeCliente"
    ).value;

  const nomeBarbeiro =
    document.getElementById(
      "nomeBarbeiro"
    ).value;

  const horario =
    document.getElementById(
      "horario"
    ).value;

  const data =
    document.getElementById(
      "data"
    ).value;

  const response = await fetch(
    `${API}/agendamentos`,
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json",

        Authorization: `Bearer ${token}`
      },

      body: JSON.stringify({
        nomeCliente,
        nomeBarbeiro,
        horario,
        data
      })
    }
  );

  if (response.ok) {

    alert("Agendamento criado");

    window.location.href =
      "./agendamentos.html";

  } else {

    alert("Erro ao criar");

  }
}