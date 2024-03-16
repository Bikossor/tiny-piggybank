import { Module, NestModule } from '@nestjs/common';
import { PiggybankController } from './piggybank.controller';
import { Piggybank } from './piggybank.entity';
import { PiggybankService } from './piggybank.service';
import { MikroOrmModule } from '@mikro-orm/nestjs';

@Module({
  controllers: [PiggybankController],
  exports: [PiggybankService],
  imports: [MikroOrmModule.forFeature({ entities: [Piggybank] })],
  providers: [PiggybankService],
})
export class PiggybankModule implements NestModule {
  configure() {}
}
