
function ativarLink() {
    document.getElementById('meuLink').click();
}

const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-submit");


loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;


    if (username === "user" && password === "admin") {
        alert("Logado com sucesso!");
        ativarLink()
    } else {
        alert("Login ou Senha inválidos");
    }

})

