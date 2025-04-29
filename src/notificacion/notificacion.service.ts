import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { NotificacionDto } from '../dto/notificacion.dto';
import { INotificacion } from '../model/notificacion.model';

@Injectable()
export class NotificacionService {
  constructor(
    @InjectModel('Notificacion')
    private readonly notificacionModel: Model<INotificacion>,
  ) {}

  async create(notificacionDto: NotificacionDto): Promise<INotificacion> {
    const nuevaNotificacion = new this.notificacionModel(notificacionDto);
    return await nuevaNotificacion.save();
  }

  async findAll(): Promise<INotificacion[]> {
    return await this.notificacionModel.find().exec();
  }

  async findOne(id: string): Promise<INotificacion> {
    const notificacion = await this.notificacionModel.findById(id).exec();
    if (!notificacion) {
      throw new NotFoundException(`Notificacion with ID ${id} not found`);
    }
    return notificacion;
  }

  async update(
    id: string,
    notificacionDto: NotificacionDto,
  ): Promise<INotificacion> {
    const updatedNotificacion = await this.notificacionModel
      .findByIdAndUpdate(id, notificacionDto, { new: true })
      .exec();
    if (!updatedNotificacion) {
      throw new NotFoundException(`Notificacion with ID ${id} not found`);
    }
    return updatedNotificacion;
  }

  async delete(id: string): Promise<INotificacion> {
    const deletedNotificacion = await this.notificacionModel
      .findByIdAndDelete(id)
      .exec();
    if (!deletedNotificacion) {
      throw new NotFoundException(`Notificacion with ID ${id} not found`);
    }
    return deletedNotificacion;
  }
}
