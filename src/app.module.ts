import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './usuario/entities/ususario.entity';
import { UsuarioModule } from './usuario/usuario.module';
import { PeriodoModule } from './periodo/periodo.module';
import { Periodo } from './periodo/entities/periodo.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_farmaura',
      entities: [Usuario, Periodo],
      synchronize: true,
    }),
    UsuarioModule,
    PeriodoModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
