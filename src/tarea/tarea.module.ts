import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TareaController } from './tarea.controller';
import { TareaService } from './tarea.service';
import { tareaSchema } from '../model/tarea.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Tarea', schema: tareaSchema }]),
  ],
  controllers: [TareaController],
  providers: [TareaService],
  exports: [TareaService],
})
export class TareaModule {}
