import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { EventoDto } from '../dto/evento.dto';
import { IEvento } from '../model/evento.model';

@Injectable()
export class EventoService {
  constructor(
    @InjectModel('Evento') private readonly eventoModel: Model<IEvento>,
  ) {}

  async create(eventoDto: EventoDto): Promise<IEvento> {
    const nuevoEvento = new this.eventoModel(eventoDto);
    return await nuevoEvento.save();
  }

  async findAll(): Promise<IEvento[]> {
    return await this.eventoModel.find().exec();
  }

  async findOne(id: string): Promise<IEvento> {
    const evento = await this.eventoModel.findById(id).exec();
    if (!evento) {
      throw new NotFoundException(`Evento with ID ${id} not found`);
    }
    return evento;
  }

  async update(id: string, eventoDto: EventoDto): Promise<IEvento> {
    const updatedEvento = await this.eventoModel
      .findByIdAndUpdate(id, eventoDto, { new: true })
      .exec();
    if (!updatedEvento) {
      throw new NotFoundException(`Evento with ID ${id} not found`);
    }
    return updatedEvento;
  }

  async delete(id: string): Promise<IEvento> {
    const deletedEvento = await this.eventoModel.findByIdAndDelete(id).exec();
    if (!deletedEvento) {
      throw new NotFoundException(`Evento with ID ${id} not found`);
    }
    return deletedEvento;
  }
}
