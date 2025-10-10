import { IsNotEmpty } from 'class-validator';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Remedio } from '../../remedio/entities/remedio.entity';

@Entity({ name: 'tb_periodos' })
export class Periodo {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  periodo: string;

  @IsNotEmpty()
  @Column({ type: 'time', nullable: false })
  horario: Date;

  @OneToMany(() => Remedio, (remedio) => remedio.periodo)
  remedios: Remedio[];
}
