const user = JSON.parse(localStorage.getItem("user"));

if (!user) {
    window.location.href = "/Frontend/index.html";
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("user-name").innerText = user.name;
    document.getElementById("user-email").innerText = user.email;
});

function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/Frontend/index.html";
}