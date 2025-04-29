import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { NotificacionService } from './notificacion.service';
import { NotificacionDto } from '../dto/notificacion.dto';

@Controller('notificaciones')
export class NotificacionController {
  constructor(private readonly notificacionService: NotificacionService) {}

  @Post()
  async create(@Body() notificacionDto: NotificacionDto) {
    return await this.notificacionService.create(notificacionDto);
  }

  @Get()
  async findAll() {
    return await this.notificacionService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.notificacionService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() notificacionDto: NotificacionDto,
  ) {
    return await this.notificacionService.update(id, notificacionDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.notificacionService.delete(id);
  }
}
