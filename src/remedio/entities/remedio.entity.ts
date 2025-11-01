import { IsNotEmpty } from 'class-validator';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Periodo } from '../../periodo/entities/periodo.entity';
import { Usuario } from '../../usuario/entities/ususario.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'tb_remedios' })
export class Remedio {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  @ApiProperty()
  nome: string;

  @IsNotEmpty()
  @Column({ type: 'decimal', precision: 6, scale: 2, nullable: false })
  @ApiProperty()
  doseMg: number;

  @ApiProperty({ type: () => Periodo })
  @ManyToOne(() => Periodo, (periodo) => periodo.remedios)
  periodo: Periodo;

  @ApiProperty({ type: () => Usuario })
  @ManyToOne(() => Usuario, (usuario) => usuario.remedios)
  usuario: Usuario;
}
