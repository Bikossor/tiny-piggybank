import {
  Body,
  Controller,
  Delete,
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
@Controller('piggybank')
export class PiggybankController {
  constructor(private readonly piggybankService: PiggybankService) {}

  @UseGuards(AuthGuard)
  @ApiOperation({
    summary: 'Get all piggybanks of a user',
  })
  @Get()
  async getPiggybanks(@Request() request): Promise<Piggybank[]> {
    return this.piggybankService.getPiggybanksFromUser(request.user.sub);
  }

  @UseGuards(AuthGuard)
  @ApiOperation({
    summary: 'Get a piggybank by id',
  })
  @Get(':id')
  async getPiggybankById(id: string): Promise<Piggybank> {
    return this.piggybankService.getPiggybankById(id);
  }

  @UseGuards(AuthGuard)
  @ApiOperation({
    summary: 'Create a piggybank for a user',
  })
  @Post()
  async createPiggybank(
    @Request() request,
    @Body('piggybank') piggybankData: CreatePiggybankDto,
  ): Promise<string> {
    return this.piggybankService.createPiggybank(
      piggybankData.name,
      request.user.sub,
    );
  }

  @UseGuards(AuthGuard)
  @ApiOperation({
    summary: 'Delete a piggybank by id',
  })
  @Delete(':id')
  async deletePiggybank(id: string) {
    return this.piggybankService.deletePiggybank(id);
  }
}
