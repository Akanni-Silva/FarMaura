import { IsNotEmpty } from 'class-validator';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Periodo } from '../../periodo/entities/periodo.entity';
import { Usuario } from '../../usuario/entities/ususario.entity';

@Entity({ name: 'tb_remedios' })
export class Remedio {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  nome: string;

  @IsNotEmpty()
  @Column({ type: 'decimal', precision: 6, scale: 2, nullable: false })
  doseMg: number;

  @ManyToOne(() => Periodo, (periodo) => periodo.remedios)
  periodo: Periodo;

  @ManyToOne(() => Usuario, (usuario) => usuario.remedios)
  usuario: Usuario;
}
