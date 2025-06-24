const express = require('express');
const cors = require('cors');
const authRouter = require('./routes/auth'); 
const sequelize = require('./database');
const User = require('./models/User');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Rotas
app.use('/auth', authRouter);

// Sincronizar o banco de dados
sequelize.sync()
  .then(() => console.log('✅ Banco SQLite sincronizado!'))
  .catch((err) => console.error('❌ Erro ao sincronizar o banco:', err));

// Iniciar o servidor
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
