import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs';
import { Poke } from '../interfaces/poke.interface';

@Injectable()
export class PokeService {
  constructor(private httpService: HttpService) {}
  private readonly pokes: Poke[] = [];

  create(poke: Poke) {
    this.pokes.push(poke);
  }

  // Find all pokemon
  findAll() {
    return this.httpService
      .get('https://pokeapi.co/api/v2/pokemon/')
      .pipe(map((response) => response.data));
  }

  //Find by ID
}
