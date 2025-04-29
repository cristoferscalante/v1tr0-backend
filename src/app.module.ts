import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './usuario/usuario.module';
import { ProyectoModule } from './proyecto/proyecto.module';
import { TareaModule } from './tarea/tarea.module';
import { EventoModule } from './evento/evento.module';
import { NotificacionModule } from './notificacion/notificacion.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), // carga .env automáticamente
    MongooseModule.forRoot(
      process.env.MONGO_URI || 'mongodb://localhost:27017/v1tro_db',
      {
        dbName: 'v1tro_db',
      },
    ),
    UsuarioModule,
    ProyectoModule,
    TareaModule,
    EventoModule,
    NotificacionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
