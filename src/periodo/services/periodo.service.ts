import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Periodo } from '../entities/periodo.entity';
import { ILike, Repository } from 'typeorm';
import { DeleteResult } from 'typeorm/browser';

@Injectable()
export class PeriodoService {
  constructor(
    @InjectRepository(Periodo)
    private readonly periodoRepository: Repository<Periodo>,
  ) {}

  async findAll(): Promise<Periodo[]> {
    return await this.periodoRepository.find();
  }

  async findById(id: number): Promise<Periodo> {
    const periodo = await this.periodoRepository.findOne({
      where: {
        id,
      },
    });
    if (!periodo) {
      throw new HttpException('Tema não encontrado', HttpStatus.NOT_FOUND);
    }

    return periodo;
  }

  async findAllByPeriodo(periodo: string): Promise<Periodo[]> {
    return await this.periodoRepository.find({
      where: {
        periodo: ILike(`%${periodo}%`),
      },
    });
  }

  async create(periodo: Periodo): Promise<Periodo> {
    return await this.periodoRepository.save(periodo);
  }

  async update(periodo: Periodo): Promise<Periodo> {
    await this.findById(periodo.id);

    return await this.periodoRepository.save(periodo);
  }

  async delete(id: number): Promise<DeleteResult> {
    await this.findById(id);

    return await this.periodoRepository.delete(id);
  }
}
