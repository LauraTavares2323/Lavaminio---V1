// cadastro de pessoa
document.getElementById('cadastroMorador').addEventListener('submit', function (e) {
  e.preventDefault();

  const nome = document.getElementById('nome').value;
  const bloco = document.getElementById('bloco').value;
  const apartamento = document.getElementById('apartamento').value;
  const telefone = document.getElementById('telefone').value;
  const email = document.getElementById('email').value;
  const status = document.getElementById('status').value;

  fetch('http://localhost:2500/cadastroMorador', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nome, bloco, apartamento, telefone, email, status })
  })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        alert("Cadastro concluído com sucesso");
        window.location.href = "ListarMoradores.html"
      } else {
        alert("Não foi possível realizar esse cadastro");
      }
    })

});