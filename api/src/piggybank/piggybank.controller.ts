import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { PiggybankService } from './piggybank.service';
import { Piggybank } from './piggybank.entity';
import { AuthGuard } from 'src/auth/auth.guard';
import { CreatePiggybankDto } from './dto/CreatePiggybankDto';

@Controller()
export class PiggybankController {
  constructor(private readonly piggybankService: PiggybankService) {}

  @Get('piggybank')
  async getPiggybank(): Promise<Piggybank[]> {
    return this.piggybankService.getPiggybank();
  }

  @UseGuards(AuthGuard)
  @Post('piggybank')
  async createPiggybank(
    @Request() request,
    @Body('piggybank') piggybankData: CreatePiggybankDto,
  ): Promise<string> {
    return this.piggybankService.createPiggybank(
      piggybankData.name,
      request.user.sub,
    );
  }
}
