import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TareaDto } from '../dto/tarea.dto';
import { ITarea } from '../model/tarea.model';

@Injectable()
export class TareaService {
  constructor(
    @InjectModel('Tarea') private readonly tareaModel: Model<ITarea>,
  ) {}

  async create(tareaDto: TareaDto): Promise<ITarea> {
    const nuevaTarea = new this.tareaModel(tareaDto);
    return await nuevaTarea.save();
  }

  async findAll(): Promise<ITarea[]> {
    return await this.tareaModel.find().exec();
  }

  async findOne(id: string): Promise<ITarea> {
    const tarea = await this.tareaModel.findById(id).exec();
    if (!tarea) {
      throw new NotFoundException(`Tarea with ID ${id} not found`);
    }
    return tarea;
  }

  async update(id: string, tareaDto: TareaDto): Promise<ITarea> {
    const updatedTarea = await this.tareaModel
      .findByIdAndUpdate(id, tareaDto, { new: true })
      .exec();
    if (!updatedTarea) {
      throw new NotFoundException(`Tarea with ID ${id} not found`);
    }
    return updatedTarea;
  }

  async delete(id: string): Promise<ITarea> {
    const deletedTarea = await this.tareaModel.findByIdAndDelete(id).exec();
    if (!deletedTarea) {
      throw new NotFoundException(`Tarea with ID ${id} not found`);
    }
    return deletedTarea;
  }
}
