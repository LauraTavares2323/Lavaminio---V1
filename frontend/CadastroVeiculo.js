
document.getElementById('cadastroCarro').addEventListener('submit', function (e) {
  e.preventDefault();

  const placa = document.getElementById('placa').value;
  const modelo = document.getElementById('modelo').value;
  const cor = document.getElementById('cor').value;
  const morador = document.getElementById('morador').value;
  const box = document.getElementById('box').value;

  fetch('http://localhost:2500/cadastroCarro', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ placa, modelo, cor, morador, box })
  })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        alert("Este veículo foi cadastrado");
        window.location.href = "listarVeiculos.html"
      } else {
        alert("Não foi possível realizar o cadastro desse veículo");
      }
    })

});
