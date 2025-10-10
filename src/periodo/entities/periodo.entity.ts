import { IsNotEmpty } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
