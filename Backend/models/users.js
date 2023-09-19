import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  url: String,
  descripcion: String,
 
});

const User = mongoose.model('User', userSchema);

export default User;
