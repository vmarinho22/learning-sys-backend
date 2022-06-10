import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post
} from '@nestjs/common';
import { CreateHistoricDto } from './dto/create-historic.dto';
import { UpdateHistoricDto } from './dto/update-historic.dto';
import { HistoricsService } from './historics.service';

@Controller('historics')
export class HistoricsController {
  constructor(private readonly historicsService: HistoricsService) {}

  @Post()
  create(@Body() createHistoricDto: CreateHistoricDto) {
    return this.historicsService.create(createHistoricDto);
  }

  @Get()
  findAll() {
    return this.historicsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.historicsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateHistoricDto: UpdateHistoricDto
  ) {
    return this.historicsService.update(+id, updateHistoricDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.historicsService.remove(+id);
  }
}
