import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProyectoController } from './proyecto.controller';
import { ProyectoService } from './proyecto.service';
import { proyectoSchema } from '../model/proyecto.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Proyecto', schema: proyectoSchema }]),
  ],
  controllers: [ProyectoController],
  providers: [ProyectoService],
  exports: [ProyectoService],
})
export class ProyectoModule {}
