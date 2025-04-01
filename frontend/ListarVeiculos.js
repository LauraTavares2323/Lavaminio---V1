
// listar os veiculos
async function loadProducts() {
    const response = await fetch('http://localhost:2500/car');
    const data = await response.json();
    console.log(data);
    const tbody = document.querySelector('#product-table-body');
    tbody.innerHTML = '';

    data.car.forEach(car => {
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${car.id}</td>
        <td>${car.brand}</td>
        <td>${car.color}</td>
        <td>R$ ${car.placa}</td>
        <button onclick="editCar(${car.id})">Edite seu carro</button>
        <button onclick="deleteCar(${car.id})">Delete seu carro</button>
      `;
        tbody.appendChild(row);
    });
}

// editar o veiculo
async function editCar(id) {
    const placa = prompt("Nova placa do veiculo");
    const modelo = prompt("Novo modelo do veiculo");
    const cor = prompt("Nova cor do veiculo");
    const morador = prompt("Novo morador do veiculo");
    const box = prompt("Novo box do seu carro");

    await fetch(`http://localhost:2500 /editar/${id} `, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({placa, modelo, cor, morador, box })
    });
    loadProducts();


}

// apagar o veiculo
async function deleteCar(id) {
    await fetch(`http://localhost:2500/apagar/${id}`, {
        method: 'DELETE'
    });
    loadProducts();
}

loadProducts()
