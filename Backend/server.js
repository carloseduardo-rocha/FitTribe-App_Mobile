const express = require('express');
const cors = require('cors');
const eventosRouter = require('./routes/eventos');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use('/eventos', eventosRouter);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
