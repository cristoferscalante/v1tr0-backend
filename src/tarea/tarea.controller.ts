import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { TareaService } from './tarea.service';
import { TareaDto } from '../dto/tarea.dto';

@Controller('tareas')
export class TareaController {
  constructor(private readonly tareaService: TareaService) {}

  @Post()
  async create(@Body() tareaDto: TareaDto) {
    return await this.tareaService.create(tareaDto);
  }

  @Get()
  async findAll() {
    return await this.tareaService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.tareaService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() tareaDto: TareaDto) {
    return await this.tareaService.update(id, tareaDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.tareaService.delete(id);
  }
}
