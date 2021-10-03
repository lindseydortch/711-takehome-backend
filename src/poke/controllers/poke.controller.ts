import { Controller, Get, Param } from '@nestjs/common';
import { PokeService } from '../providers/poke.service';
// import { Poke } from '../interfaces/poke.interface';

@Controller('poke')
export class PokeController {
  constructor(private pokeService: PokeService) {}

  // Find All Pokemon
  @Get()
  findAll() {
    const res = this.pokeService.findAll();
    return res;
  }

  // Find by ID
  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `This returns a pokemon by id. The id of this pokemon is ${id}`;
  }
}
