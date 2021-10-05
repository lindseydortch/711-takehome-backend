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
    return `Testing this route: ${id}`;
    // const res = this.pokeService.findOne(id);
    // console.log(res);
    // return res;
  }
}
