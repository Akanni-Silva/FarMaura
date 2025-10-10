import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Remedio } from '../entities/remedio.entity';
import { ILike, Repository } from 'typeorm';
import { PeriodoService } from '../../periodo/services/periodo.service';
import { DeleteResult } from 'typeorm/browser';

@Injectable()
export class RemedioService {
  constructor(
    @InjectRepository(Remedio)
    private remedioRpository: Repository<Remedio>,
    private periodoService: PeriodoService,
  ) {}

  async findAll(): Promise<Remedio[]> {
    return await this.remedioRpository.find({
      relations: {
        periodo: true,
        usuario: true,
      },
    });
  }

  async findById(id: number): Promise<Remedio> {
    const remedio = await this.remedioRpository.findOne({
      where: {
        id,
      },
      relations: {
        periodo: true,
        usuario: true,
      },
    });

    if (!remedio) {
      throw new HttpException('Postagem não encontrada', HttpStatus.NOT_FOUND);
    }
    return remedio;
  }

  async findAllBynome(nome: string): Promise<Remedio[]> {
    return await this.remedioRpository.find({
      where: {
        nome: ILike(`%${nome}%`),
      },
      relations: {
        periodo: true,
        usuario: true,
      },
    });
  }

  async create(remedio: Remedio): Promise<Remedio> {
    await this.periodoService.findById(remedio.periodo.id);
    return await this.remedioRpository.save(remedio);
  }

  async update(remedio: Remedio): Promise<Remedio> {
    await this.findById(remedio.id);
    await this.periodoService.findById(remedio.periodo.id);
    return await this.remedioRpository.save(remedio);
  }

  async delete(id: number): Promise<DeleteResult> {
    await this.findById(id);

    return await this.remedioRpository.delete(id);
  }
}
