import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Remedio } from '../../remedio/entities/remedio.entity';
import { ApiProperty } from '@nestjs/swagger';
import { Periodo } from '../../periodo/entities/periodo.entity';

@Entity({ name: 'tb_usuarios' })
export class Usuario {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  @ApiProperty()
  nome: string;

  @IsEmail()
  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  @ApiProperty()
  usuario: string;

  @MinLength(8)
  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  @ApiProperty()
  senha: string;

  @Column({ length: 5000 })
  @ApiProperty()
  foto: string;

  @ApiProperty({ type: () => Remedio })
  @OneToMany(() => Remedio, (remedio) => remedio.usuario)
  remedios: Remedio[];

  @ApiProperty({ type: () => Periodo })
  @OneToMany(() => Periodo, (periodo) => periodo.usuario)
  periodos: Periodo[];
}
