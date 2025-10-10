import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Remedio } from './entities/remedio.entity';
import { PeriodoModule } from '../periodo/periodo.module';
import { RemedioService } from './services/remedio.service';
import { RemedioController } from './controllers/remedio.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Remedio]), PeriodoModule],
  providers: [RemedioService],
  controllers: [RemedioController],
  exports: [],
})
export class RemediomModule {}
