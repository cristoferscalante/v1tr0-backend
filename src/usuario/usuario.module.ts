import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsuarioController } from './usuario.controller';
import { UsuarioService } from './usuario.service';
import { usuarioSchema } from '../model/usuario.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Usuario', schema: usuarioSchema }]),
  ],
  controllers: [UsuarioController],
  providers: [UsuarioService],
  exports: [UsuarioService],
})
export class UsuarioModule {}
