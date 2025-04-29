import mongoose from 'mongoose';

export const notificacionSchema = new mongoose.Schema(
  {
    descripcion: { type: String, required: true },
    fecha: { type: Date, default: Date.now },
  },
  { timestamps: true },
);

export interface INotificacion extends mongoose.Document {
  descripcion: string;
  fecha: Date;
  createdAt: Date;
  updatedAt: Date;
}
