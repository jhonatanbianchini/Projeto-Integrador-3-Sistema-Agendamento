const token =
  localStorage.getItem("token");

if (!token) {
  window.location.href = "../index.html";
}

async function carregarAgendamentos() {

  const response = await fetch(
    `${API}/agendamentos`,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );

  const dados = await response.json();

  const lista =
    document.getElementById("lista");

  lista.innerHTML = "";

  dados.forEach((item) => {

    lista.innerHTML += `
      <div class="item">

        <div>
          ${item.nomeCliente}
          -
          ${item.nomeBarbeiro}
          -
          ${item.data}
          -
          ${item.horario}
        </div>

        <div class="botoes">

          <button onclick="editar(${item.id})">
            Editar
          </button>

          <button onclick="excluir(${item.id})">
            Excluir
          </button>

        </div>

      </div>
    `;
  });
}

async function excluir(id) {

  await fetch(
    `${API}/agendamentos/${id}`,
    {
      method: "DELETE",

      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );

  carregarAgendamentos();
}

async function editar(id) {

  const nomeCliente =
    prompt("Novo nome cliente");

  const nomeBarbeiro =
    prompt("Novo barbeiro");

  const data =
    prompt("Nova data");

  const horario =
    prompt("Novo horário");

  await fetch(
    `${API}/agendamentos/${id}`,
    {
      method: "PUT",

      headers: {
        "Content-Type": "application/json",

        Authorization: `Bearer ${token}`
      },

      body: JSON.stringify({
        nomeCliente,
        nomeBarbeiro,
        data,
        horario
      })
    }
  );

  carregarAgendamentos();
}

function sair() {

  localStorage.removeItem("token");

  window.location.href =
    "../index.html";
}

carregarAgendamentos();