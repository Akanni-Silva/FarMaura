import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Periodo } from '../entities/periodo.entity';
import { ILike, Repository } from 'typeorm';
import { DeleteResult } from 'typeorm/browser';
import { UsuarioService } from '../../usuario/services/usuario.service';

@Injectable()
export class PeriodoService {
  constructor(
    @InjectRepository(Periodo)
    private periodoRepository: Repository<Periodo>,
    private usuarioService: UsuarioService,
  ) {}

  async findAll(): Promise<Periodo[]> {
    return await this.periodoRepository.find({
      relations: {
        usuario: true,
      },
    });
  }

  async findById(id: number): Promise<Periodo> {
    const periodo = await this.periodoRepository.findOne({
      where: {
        id,
      },
    });
    if (!periodo) {
      throw new HttpException('Periodo não encontrado', HttpStatus.NOT_FOUND);
    }

    return periodo;
  }

  async findAllByPeriodo(periodo: string): Promise<Periodo[]> {
    return await this.periodoRepository.find({
      where: {
        nome: ILike(`%${periodo}%`),
      },
    });
  }

  async create(periodo: Periodo): Promise<Periodo> {
    await this.usuarioService.findById(periodo.usuario.id);
    return await this.periodoRepository.save(periodo);
  }

  async update(periodo: Periodo): Promise<Periodo> {
    await this.findById(periodo.id);
    await this.usuarioService.findById(periodo.usuario.id);

    return await this.periodoRepository.save(periodo);
  }

  async delete(id: number): Promise<DeleteResult> {
    await this.findById(id);

    return await this.periodoRepository.delete(id);
  }
}
