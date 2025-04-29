import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UsuarioDto } from '../dto/usuario.dto';
import { IUsuario } from '../model/usuario.model';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectModel('Usuario') private readonly usuarioModel: Model<IUsuario>,
  ) {}

  // Crear usuario
  async create(usuarioDto: UsuarioDto): Promise<IUsuario> {
    const nuevoUsuario = new this.usuarioModel(usuarioDto);
    return await nuevoUsuario.save();
  }

  // Obtener todos los usuarios
  async findAll(): Promise<IUsuario[]> {
    return await this.usuarioModel.find().exec();
  }

  // Obtener usuario por ID
  async findOne(id: string): Promise<IUsuario> {
    const usuario = await this.usuarioModel.findById(id).exec();
    if (!usuario) {
      throw new Error(`Usuario with ID ${id} not found`);
    }
    return usuario;
  }

  // Actualizar usuario
  async update(id: string, usuarioDto: UsuarioDto): Promise<IUsuario> {
    const updatedUsuario = await this.usuarioModel
      .findByIdAndUpdate(id, usuarioDto, { new: true })
      .exec();
    if (!updatedUsuario) {
      throw new Error(`Usuario with ID ${id} not found`);
    }
    return updatedUsuario;
  }

  // Eliminar usuario
  async delete(id: string): Promise<IUsuario> {
    const usuario = await this.usuarioModel.findByIdAndDelete(id).exec();
    if (!usuario) {
      throw new Error(`Usuario with ID ${id} not found`);
    }
    return usuario;
  }
}
