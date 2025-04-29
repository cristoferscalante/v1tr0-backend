import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioDto } from '../dto/usuario.dto';

@Controller('usuarios')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post()
  async create(@Body() usuarioDto: UsuarioDto) {
    return await this.usuarioService.create(usuarioDto);
  }

  @Get()
  async findAll() {
    return await this.usuarioService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.usuarioService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() usuarioDto: UsuarioDto) {
    return await this.usuarioService.update(id, usuarioDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.usuarioService.delete(id);
  }
}
