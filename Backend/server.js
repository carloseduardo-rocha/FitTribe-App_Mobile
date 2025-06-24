const express = require('express');
const cors = require('cors');
const eventosRouter = require('./routes/eventos');
const authRouter = require('./routes/auth'); // Rotas de autenticação

const sequelize = require('./database');
const User = require('./models/User');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use('/eventos', eventosRouter);
app.use('/auth', authRouter); // Endereço das rotas de autenticação

// Sincronizar o banco
sequelize.sync().then(() => {
  console.log('✅ Banco SQLite sincronizado!');
}).catch((err) => {
  console.error('❌ Erro ao sincronizar o banco:', err);
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
