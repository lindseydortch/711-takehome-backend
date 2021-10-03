import { Controller, Get } from '@nestjs/common';
import { PokeService } from '../providers/poke.service';
import { Poke } from '../interfaces/poke.interface';

@Controller('poke')
export class PokeController {
  constructor(private pokeService: PokeService) {}

  @Get()
  async findAll(): Promise<Poke[]> {
    return this.pokeService.findAll();
  }
}
