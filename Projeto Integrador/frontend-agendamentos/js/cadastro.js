async function cadastrar() {

  const usuario =
    document.getElementById("usuario").value;

  const senha =
    document.getElementById("senha").value;

  const response = await fetch(
    `${API}/auth/registrar`,
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({
        usuario,
        senha
      })
    }
  );

  const data = await response.json();

  if (response.ok) {

    alert(data.mensagem);

    window.location.href =
      "index.html";

  } else {

    alert("Erro ao cadastrar");

  }
}