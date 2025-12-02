import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Periodo } from './entities/periodo.entity';
import { PeriodoService } from './services/periodo.service';
import { PeriodoController } from './controllers/periodo.controller';
import { UsuarioModule } from '../usuario/usuario.module';

@Module({
  imports: [TypeOrmModule.forFeature([Periodo]), UsuarioModule],
  providers: [PeriodoService],
  controllers: [PeriodoController],
  exports: [PeriodoService],
})
export class PeriodoModule {}
