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
import { RemedioService } from '../services/remedio.service';
import { Remedio } from '../entities/remedio.entity';
import { JwtAuthGuard } from '../../auth/guard/jwt-auth.guard';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Remedios')
@UseGuards(JwtAuthGuard)
@Controller('/remedios')
export class RemedioController {
  constructor(private readonly remedioService: RemedioService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<Remedio[]> {
    return this.remedioService.findAll();
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  findById(@Param('id', ParseIntPipe) id: number): Promise<Remedio> {
    return this.remedioService.findById(id);
  }

  @Get('/nome/:nome')
  @HttpCode(HttpStatus.OK)
  findBynome(@Param('nome') nome: string): Promise<Remedio[]> {
    return this.remedioService.findAllBynome(nome);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() remedio: Remedio): Promise<Remedio> {
    return this.remedioService.create(remedio);
  }

  @Put()
  @HttpCode(HttpStatus.OK)
  update(@Body() remedio: Remedio): Promise<Remedio> {
    return this.remedioService.update(remedio);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.remedioService.delete(id);
  }
}
