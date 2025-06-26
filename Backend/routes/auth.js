const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');

// Rota de cadastro (signup)
router.post('/signup', async (req, res) => {
  const { name, email, password, profilePicture } = req.body; // aceita profilePicture opcional
  try {
    const hash = await bcrypt.hash(password, 10);
    const user = await User.create({ 
      name, 
      email, 
      password: hash,
      profilePicture: profilePicture || null, // salva ou null
    });
    res.status(201).json({ 
      user: { 
        id: user.id, 
        name: user.name,
        email: user.email,
        profilePicture: user.profilePicture,
      } 
    });
  } catch (err) {
    res.status(400).json({ error: 'E-mail já existe ou inválido.' });
  }
});

// Rota de login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email } });
  if (!user) return res.status(404).json({ error: 'Usuário não encontrado.' });
  
  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(401).json({ error: 'Senha incorreta.' });

  res.json({ 
    user: { 
      id: user.id, 
      name: user.name,
      email: user.email,
      profilePicture: user.profilePicture,
    } 
  });
});

module.exports = router;
