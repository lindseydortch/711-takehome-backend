import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { PokeController } from './controllers/poke.controller';
import { PokeService } from './providers/poke.service';

@Module({
  imports: [HttpModule],
  controllers: [PokeController],
  providers: [PokeService],
})
export class PokeModule {}
