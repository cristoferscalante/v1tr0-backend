import mongoose from 'mongoose';

export const tareaSchema = new mongoose.Schema({
  id: String,
  titulo: String,
  descripcion: String,
  fechaCreacion: { type: Date, default: Date.now },
  fechaVencimiento: Date,
  estado: String,
  prioridad: String,
  asignado: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' },
  proyectoId: { type: mongoose.Schema.Types.ObjectId, ref: 'Proyecto' },
});

export interface ITarea extends mongoose.Document {
  id: string;
  titulo: string;
  descripcion: string;
  fechaCreacion: Date;
  fechaVencimiento: Date;
  estado: string;
  prioridad: string;
  asignado: mongoose.Types.ObjectId;
  proyectoId: mongoose.Types.ObjectId;
}
