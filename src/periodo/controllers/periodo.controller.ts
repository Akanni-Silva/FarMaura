import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { PeriodoService } from '../services/periodo.service';
import { Periodo } from '../entities/periodo.entity';
import { JwtAuthGuard } from '../../auth/guard/jwt-auth.guard';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Periodos')
@UseGuards(JwtAuthGuard)
@Controller('/periodos')
export class PeriodoController {
  constructor(private readonly periodoService: PeriodoService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<Periodo[]> {
    return this.periodoService.findAll();
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  findById(@Param('id', ParseIntPipe) id: number): Promise<Periodo> {
    return this.periodoService.findById(id);
  }

  @Get('/periodo/:nome')
  @HttpCode(HttpStatus.OK)
  findAllBydescricao(@Param('nome') nome: string): Promise<Periodo[]> {
    return this.periodoService.findAllByPeriodo(nome);
  }

  @Post()
  @HttpCode(HttpStatus.OK)
  create(@Body() periodo: Periodo): Promise<Periodo> {
    return this.periodoService.create(periodo);
  }

  @Put()
  @HttpCode(HttpStatus.OK)
  update(@Body() periodo: Periodo): Promise<Periodo> {
    return this.periodoService.update(periodo);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.periodoService.delete(id);
  }
}
