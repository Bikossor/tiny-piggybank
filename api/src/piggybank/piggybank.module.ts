import { Module, NestModule } from '@nestjs/common';
import { PiggybankController } from './piggybank.controller';
import { Piggybank } from './piggybank.entity';
import { PiggybankService } from './piggybank.service';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { UserService } from 'src/user/user.service';
import { User } from 'src/user/user.entity';

@Module({
  controllers: [PiggybankController],
  exports: [PiggybankService],
  imports: [MikroOrmModule.forFeature({ entities: [Piggybank, User] })],
  providers: [PiggybankService, UserService],
})
export class PiggybankModule implements NestModule {
  configure() {}
}
