const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 3000;

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'acesso123',
  database: 'ecomerce'
});

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao MySQL:', err);
  } else {
    console.log('Conectado ao MySQL!');
  }
});

app.use(cors());
app.use(express.json());

app.get('/games', (req, res) => {
  const query = 'SELECT * FROM jogos';

  connection.query(query, (err, results) => {
    if (err) {
      console.error('Erro ao executar a query de jogos:', err);
      res.status(500).json({ error: 'Erro interno do servidor' });
    } else {
      res.json(results);
    }
  });
});

app.get('/consoles', (req, res) => {
  const query = 'SELECT * FROM console';

  connection.query(query, (err, results) => {
    if (err) {
      console.error('Erro ao executar a query de consoles:', err);
      res.status(500).json({ error: 'Erro interno do servidor' });
    } else {
      res.json(results);
    }
  });
});

app.get('/acessorios', (req, res) => {
  const query = 'SELECT * FROM ascesorios';

  connection.query(query, (err, results) => {
    if (err) {
      console.error('Erro ao executar a query de acessorios:', err);
      res.status(500).json({ error: 'Erro interno do servidor' });
    } else {
      res.json(results);
    }
  });
});

app.listen(port, '192.168.15.9', () => {
  console.log(`Servidor rodando em http://192.168.15.9:${port}`);
});