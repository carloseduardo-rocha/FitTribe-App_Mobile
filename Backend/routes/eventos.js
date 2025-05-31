const express = require('express');
const router = express.Router();
const eventos = require('../data/eventos.json');
const buscarEventosCorreCeara = require('../utils/scrapeEventos');

router.get('/', (req, res) => {
  res.json(eventos);
});

router.get('/externos', async (req, res) => {
  try {
    const eventosExternos = await buscarEventosCorreCeara();
    res.json(eventosExternos);
  } catch (err) {
    console.error('Erro ao buscar eventos externos:', err);
    res.status(500).json({ erro: 'Erro ao buscar eventos externos' });
  }
});

module.exports = router;
