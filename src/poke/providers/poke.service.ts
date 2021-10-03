import { Injectable } from '@nestjs/common';
import { Poke } from '../interfaces/poke.interface';

@Injectable()
export class PokeService {
  private readonly pokes: Poke[] = [];

  create(poke: Poke) {
    this.pokes.push(poke);
  }

  findAll(): Poke[] {
    return this.pokes;
  }
}
