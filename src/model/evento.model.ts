import mongoose from 'mongoose';

export const eventoSchema = new mongoose.Schema({
  id: String,
  titulo: String,
  descripcion: String,
  fechaInicio: Date,
  fechaFin: Date,
  ubicacion: String,
  tipo: String,
  participantes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' }],
  estado: String,
  fechaCreacion: { type: Date, default: Date.now },
});

export interface IEvento extends mongoose.Document {
  id: string;
  titulo: string;
  descripcion: string;
  fechaInicio: Date;
  fechaFin: Date;
  ubicacion: string;
  tipo: string;
  participantes: string[];
  estado: string;
  fechaCreacion: Date;
}
