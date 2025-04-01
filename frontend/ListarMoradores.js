// listar os carros

async function loadProducts() {
    const response = await fetch('http://localhost:2500/moradores');
    const data = await response.json();
    console.log(data);
    const tbody = document.querySelector('#tebody');
    tbody.innerHTML = '';

    data.users.forEach(users => {
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${users.id}</td>
        <td>${users.nome}</td>
        <td>${users.bloco}</td>
        <td>${users.apartamento}</td>
        <td>${users.telefone}</td>
        <td>${users.email}</td>
        <td>${users.status}</td>
        <button onclick="EditarMorador(${users.id})">Edite seu carro</button>
        <button onclick="ApagarMorador(${users.id})">Delete seu carro</button>
      `;
        tbody.appendChild(row);
    });
}


// editar o morador
async function EditarMorador(id) {
  const nome = prompt("Novo nome do morador");
  const bloco = prompt("Novo bloco do morador");
  const apartamento = prompt("Novo apartamento do morador");
  const telefone = prompt("Novo telefone do morador");
  const email = prompt("Novo email do morador");
  const status = prompt("Novo status do morador");

  await fetch(`http://localhost:2500/editar/${id} `, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(nome, bloco, apartamento, telefone, email, status)
  });
  loadProducts();


}

// apagar o morador
async function EditarMorador(id) {
  await fetch(`http://localhost:2500/apagar/${id}`, {
      method: 'DELETE'
  });
  loadProducts();
}

loadProducts()
