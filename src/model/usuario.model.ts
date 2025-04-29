import mongoose from 'mongoose';

export const usuarioSchema = new mongoose.Schema({
  id: String,
  nombre: String,
  email: String,
  password: String,
  rol: String,
  estado: Boolean,
  fechaCreacion: { type: Date, default: Date.now },
});

export interface IUsuario extends mongoose.Document {
  id: string;
  nombre: string;
  email: string;
  password: string;
  rol: string;
  estado: boolean;
  fechaCreacion: Date;
}
