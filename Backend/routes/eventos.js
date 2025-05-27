const express = require('express');
const router = express.Router();
const eventos = require('../data/eventos.json');

router.get('/', (req, res) => {
  res.json(eventos);
});

module.exports = router;
