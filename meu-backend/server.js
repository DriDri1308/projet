const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3001;

app.get('/api/characters', async (req, res) => {
  try {
    const response = await axios.get('https://game-of-thrones1.p.rapidapi.com/Characters', {
      headers: {
        'x-rapidapi-key': 'a60c34eb32msh7f1e43c89763490p1b7dd8jsnd0d17641af17',
        'x-rapidapi-host': 'game-of-thrones1.p.rapidapi.com',
        'Content-Type': 'application/json'
      }
    });
    const characters = response.data;
    res.json(characters);
  } catch (error) {
    console.error('Erro ao buscar personagens da API:', error);
    res.status(500).json({ error: 'Erro ao buscar personagens da API' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});