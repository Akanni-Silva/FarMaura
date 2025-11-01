import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { Usuario } from '../../usuario/entities/ususario.entity';
import { Periodo } from '../../periodo/entities/periodo.entity';
import { Remedio } from '../../remedio/entities/remedio.entity';

@Injectable()
export class DevService implements TypeOrmOptionsFactory {
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_farmaura',
      entities: [Usuario, Periodo, Remedio],
      synchronize: true,
    };
  }
}
