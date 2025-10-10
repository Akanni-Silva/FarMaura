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
} from '@nestjs/common';
import { PeriodoService } from '../services/periodo.service';
import { Periodo } from '../entities/periodo.entity';

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

  @Get('/periodo/:periodo')
  @HttpCode(HttpStatus.OK)
  findAllBydescricao(@Param('periodo') periodo: string): Promise<Periodo[]> {
    return this.periodoService.findAllByPeriodo(periodo);
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
