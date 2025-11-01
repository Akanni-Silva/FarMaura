import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './usuario/entities/ususario.entity';
import { UsuarioModule } from './usuario/usuario.module';
import { PeriodoModule } from './periodo/periodo.module';
import { Periodo } from './periodo/entities/periodo.entity';
import { Remedio } from './remedio/entities/remedio.entity';
import { RemediomModule } from './remedio/remedio.module';
import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_farmaura',
      entities: [Usuario, Periodo, Remedio],
      synchronize: true,
    }),
    UsuarioModule,
    PeriodoModule,
    RemediomModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
