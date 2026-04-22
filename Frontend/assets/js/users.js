const API = "http://127.0.0.1:3000/api/admin";

let currentUserId = null;

async function loadUsers() {
    const token = localStorage.getItem("token");

    const res = await fetch(`${API}/users`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    });

    if (!res.ok) {
        console.error("Erro ao buscar usuários");
        return;
    }

    const users = await res.json();

    const tbody = document.getElementById("users-tbody");
    tbody.innerHTML = "";

    users.forEach(u => {
        const tr = document.createElement("tr");

        tr.innerHTML = `
            <td>${u.id}</td>
            <td>${u.name}</td>
            <td>${u.email}</td>
            <td>
                <button class="action-btn edit-btn"
                    onclick="openEdit('${u.id}', '${u.name}', '${u.email}')">
                    Editar
                </button>

                <button class="action-btn delete-btn"
                    onclick="deleteUser('${u.id}')">
                    Deletar
                </button>
            </td>
        `;

        tbody.appendChild(tr);
    });
}

loadUsers();

async function deleteUser(id) {
    const token = localStorage.getItem("token");

    const confirmDelete = confirm("Tem certeza que deseja deletar este usuário?");
    if (!confirmDelete) return;

    const res = await fetch(`${API}/users/${id}`, {
        method: "DELETE",
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });

    if (!res.ok) {
        alert("Erro ao deletar usuário");
        return;
    }

    loadUsers();
}

function openEdit(id, name, email) {
    currentUserId = id;

    document.getElementById("edit-name").value = name;
    document.getElementById("edit-email").value = email;

    document.getElementById("edit-modal").classList.remove("hidden");
}

function closeModal() {
    document.getElementById("edit-modal").classList.add("hidden");
}


async function saveEdit() {
    const token = localStorage.getItem("token");

    const name = document.getElementById("edit-name").value;
    const email = document.getElementById("edit-email").value;

    const res = await fetch(`${API}/users/${currentUserId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({ name, email })
    });

    if (!res.ok) {
        alert("Erro ao atualizar usuário");
        return;
    }

    closeModal();
    loadUsers();
}