// padrão
const express = require('express');
const cors = require('cors');
const connection = require('./db_config');
const app = express();

app.use(cors());
app.use(express.json());

const port = 2500;

// endpoint de cadastro de morador
app.post('/cadastroMorador', (req, res) => {
  const { nome, bloco, apartamento, telefone, email, status } = req.body;
  const query = 'INSERT INTO users (nome, bloco, apartamento, telefone, email, status) VALUES (?, ?, ?, ?, ?, ? )';
  connection.query(query, [nome, bloco, apartamento, telefone, email, status], (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: 'Erro ao cadastrar.'
      });
    }
    res.json({
      success: true,
      message: 'Este morador foi cadastrado'
    });
  });
});


// endpoint de cadastro de veiculo
app.post('/cadastroCarro', (req, res) => {
  const { placa, modelo, cor, morador, box } = req.body;
  const query = 'INSERT INTO car (placa, modelo, cor, morador, box ) VALUES (?, ?, ?, ?,?)';
  connection.query(query, [placa, modelo, cor, morador, box], (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: 'Erro ao cadastrar.'
      });
    }
    res.json({
      success: true,
      message: 'Este veículo foi cadastrado'
    });
  });
});

// endpoint para listar os moradores
app.get('/moradores', (req, res) => {
  const query = 'SELECT nome, bloco, apartamento, telefone, email, status FROM users';
  connection.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: 'Erro ao buscar moradores.'
      });
    }
    res.json({
      success: true,
      users: results
    });
  });
});

// endpoint para listar os veiculos
app.get('/car', (req, res) => {
  const query = 'SELECT id, placa, modelo, cor, morador, box FROM car';
  connection.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: 'Erro ao buscar veiculos.'
      });
    }
    res.json({
      success: true,
      car: results
    });
  });
});


// endpoint para apagar o morador
app.delete('/apagar/:id', (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM users WHERE id = ?';
  connection.query(query, [id], (err) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: 'Erro ao deletar morador.'
      });
    }
    res.json({
      success: true,
      message: 'Morador deletado com sucesso!'
    });
  });
});


// endpoint para apagar o seu veiculo
app.delete('/apagar/:id', (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM car WHERE id = ?';
  connection.query(query, [id], (err) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: 'Erro ao deletar veiculo.'
      });
    }
    res.json({
      success: true,
      message: 'veiculo deletado com sucesso!'
    });
  });
});



