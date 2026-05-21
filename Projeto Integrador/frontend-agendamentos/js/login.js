async function login() {

  const usuario =
    document.getElementById("usuario").value;

  const senha =
    document.getElementById("senha").value;

  const response = await fetch(
    `${API}/auth/login`,
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

    localStorage.setItem(
      "token",
      data.token
    );

    window.location.href =
      "./pages/agendamentos.html";

  } else {

    alert(data.mensagem);

  }
}