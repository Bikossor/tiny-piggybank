import { Controller, Get } from '@nestjs/common';
import { PiggybankService } from './piggybank.service';
import { Piggybank } from './piggybank.entity';

@Controller()
export class PiggybankController {
  constructor(private readonly piggybankService: PiggybankService) {}

  @Get('piggybank')
  async getPiggybank(): Promise<Piggybank[]> {
    return this.piggybankService.getPiggybank();
  }
}
