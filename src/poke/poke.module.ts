import { Module } from '@nestjs/common';
import { PokeController } from './controllers/poke.controller';
import { PokeService } from './providers/poke.service';

@Module({
  controllers: [PokeController],
  providers: [PokeService],
})
export class PokeModule {}
