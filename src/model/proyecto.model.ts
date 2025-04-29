import mongoose from 'mongoose';

export const proyectoSchema = new mongoose.Schema({
  id: String,
  nombre: String,
  descripcion: String,
  fechaInicio: Date,
  fechaFin: Date,
  estado: String,
  responsable: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' },
  miembros: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' }],
});

export interface IProyecto extends mongoose.Document {
  id: string;
  nombre: string;
  descripcion: string;
  fechaInicio: Date;
  fechaFin: Date;
  estado: string;
  responsable: mongoose.Types.ObjectId;
  miembros: mongoose.Types.ObjectId[];
}
