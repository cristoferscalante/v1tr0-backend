import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { EventoService } from './evento.service';
import { EventoDto } from '../dto/evento.dto';

@Controller('eventos')
export class EventoController {
  constructor(private readonly eventoService: EventoService) {}

  @Post()
  async create(@Body() eventoDto: EventoDto) {
    return await this.eventoService.create(eventoDto);
  }

  @Get()
  async findAll() {
    return await this.eventoService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.eventoService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() eventoDto: EventoDto) {
    return await this.eventoService.update(id, eventoDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.eventoService.delete(id);
  }
}
