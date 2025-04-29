import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { ProyectoService } from './proyecto.service';
import { ProyectoDto } from '../dto/proyecto.dto';

@Controller('proyectos')
export class ProyectoController {
  constructor(private readonly proyectoService: ProyectoService) {}

  @Post()
  async create(@Body() proyectoDto: ProyectoDto) {
    return await this.proyectoService.create(proyectoDto);
  }

  @Get()
  async findAll() {
    return await this.proyectoService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.proyectoService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() proyectoDto: ProyectoDto) {
    return await this.proyectoService.update(id, proyectoDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.proyectoService.delete(id);
  }
}
