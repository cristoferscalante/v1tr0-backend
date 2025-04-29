import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EventoController } from './evento.controller';
import { EventoService } from './evento.service';
import { eventoSchema } from '../model/evento.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Evento', schema: eventoSchema }]),
  ],
  controllers: [EventoController],
  providers: [EventoService],
  exports: [EventoService],
})
export class EventoModule {}
