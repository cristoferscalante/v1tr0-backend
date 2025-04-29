import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { NotificacionController } from './notificacion.controller';
import { NotificacionService } from './notificacion.service';
import { notificacionSchema } from '../model/notificacion.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Notificacion', schema: notificacionSchema },
    ]),
  ],
  controllers: [NotificacionController],
  providers: [NotificacionService],
  exports: [NotificacionService],
})
export class NotificacionModule {}
