import express from 'express';
import User from '../models/users.js';

const router = express.Router();
router.post('/guardar', async (req, res) => {
  try {
    const { descripcion, url } = req.body;
    const nuevoDato = new Dato({ descripcion, url });
    await nuevoDato.save();
    res.status(201).json({ message: 'Datos guardados exitosamente' });
  } catch (error) {
    console.error('Error al guardar en la base de datos:', error);
    res.status(500).json({ message: 'Error al guardar en la base de datos' });
  }
});

export default router;
