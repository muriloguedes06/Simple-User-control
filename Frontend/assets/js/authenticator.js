const API_URL = "http://127.0.0.1:3000/api/auth";
async function login() {
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    try {
        const res = await fetch(`${API_URL}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password })
        });

        const data = await res.json();

        if (!res.ok) {
            alert(data.message || "Erro no login");
            return;
        }

        console.log("Login sucesso:", data);

        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        window.location.href = "/Frontend/dashboard.html";

    } catch (err) {
        console.error(err);
        alert("Erro ao conectar com o servidor");
    }
}

async function register() {
    const user = document.getElementById("register-user").value;
    const email = document.getElementById("register-email").value;
    const password = document.getElementById("register-password").value;

    try {
        const res = await fetch(`${API_URL}/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ user, email, password })
        });

        const data = await res.json();

        if (!res.ok) {
            alert(data.message || "Erro no registro");
            return;
        }

        alert("Conta criada com sucesso!");
        toggleForm();

    } catch (err) {
        console.error(err);
        alert("Erro ao conectar com o servidor");
    }
}