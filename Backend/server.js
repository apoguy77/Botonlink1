import express from 'express';
import mongoose from 'mongoose';

import usuariosRouter from './routes/usuarios.js'; // Asegúrate de que las rutas también sean archivos .mjs


const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

// Conecta a la base de datos MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/link', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Rutas de usuario
app.use('/api/link', usuariosRouter);



// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor en ejecución en el puerto ${port}`);
});
