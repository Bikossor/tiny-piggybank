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
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('piggybank')
@Controller()
export class PiggybankController {
  constructor(private readonly piggybankService: PiggybankService) {}

  @UseGuards(AuthGuard)
  @ApiOperation({
    summary: 'Get all piggybanks of a user',
  })
  @Get('piggybanks')
  async getPiggybanks(@Request() request): Promise<Piggybank[]> {
    return this.piggybankService.getPiggybanksFromUser(request.user.sub);
  }

  @UseGuards(AuthGuard)
  @ApiOperation({
    summary: 'Create a piggybank for a user',
  })
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
