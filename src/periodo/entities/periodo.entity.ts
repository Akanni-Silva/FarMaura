import { IsNotEmpty } from 'class-validator';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Remedio } from '../../remedio/entities/remedio.entity';
import { ApiProperty } from '@nestjs/swagger';
import { Usuario } from '../../usuario/entities/ususario.entity';

@Entity({ name: 'tb_periodos' })
export class Periodo {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  @ApiProperty()
  nome: string;

  @IsNotEmpty()
  @Column({ type: 'time', nullable: false })
  @ApiProperty()
  horario: Date;

  @ApiProperty({ type: () => Remedio })
  @OneToMany(() => Remedio, (remedio) => remedio.periodo)
  remedios: Remedio[];

  @ApiProperty({ type: () => Usuario })
  @ManyToOne(() => Usuario, (usuario) => usuario.periodos)
  usuario: Usuario;
}
