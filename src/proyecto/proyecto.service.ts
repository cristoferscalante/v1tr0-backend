import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProyectoDto } from '../dto/proyecto.dto';
import { IProyecto } from '../model/proyecto.model';

@Injectable()
export class ProyectoService {
  constructor(
    @InjectModel('Proyecto') private readonly proyectoModel: Model<IProyecto>,
  ) {}

  async create(proyectoDto: ProyectoDto): Promise<IProyecto> {
    const nuevoProyecto = new this.proyectoModel(proyectoDto);
    return await nuevoProyecto.save();
  }

  async findAll(): Promise<IProyecto[]> {
    return await this.proyectoModel.find().exec();
  }

  async findOne(id: string): Promise<IProyecto> {
    const proyecto = await this.proyectoModel.findById(id).exec();
    if (!proyecto) {
      throw new NotFoundException(`Proyecto with ID ${id} not found`);
    }
    return proyecto;
  }

  async update(id: string, proyectoDto: ProyectoDto): Promise<IProyecto> {
    const updatedProyecto = await this.proyectoModel
      .findByIdAndUpdate(id, proyectoDto, { new: true })
      .exec();
    if (!updatedProyecto) {
      throw new NotFoundException(`Proyecto with ID ${id} not found`);
    }
    return updatedProyecto;
  }

  async delete(id: string): Promise<IProyecto> {
    const deletedProyecto = await this.proyectoModel
      .findByIdAndDelete(id)
      .exec();
    if (!deletedProyecto) {
      throw new NotFoundException(`Proyecto with ID ${id} not found`);
    }
    return deletedProyecto;
  }
}
