import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post
} from '@nestjs/common';
import { CreateTrainingDto } from './dto/create-training.dto';
import { UpdateTrainingDto } from './dto/update-training.dto';
import { TrainingsService } from './trainings.service';

@Controller('trainings')
export class TrainingsController {
  constructor(private readonly trainingsService: TrainingsService) {}

  @Post()
  create(@Body() createTrainingDto: CreateTrainingDto) {
    return this.trainingsService.create(createTrainingDto);
  }

  @Get()
  findAll() {
    return this.trainingsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.trainingsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTrainingDto: UpdateTrainingDto
  ) {
    return this.trainingsService.update(+id, updateTrainingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.trainingsService.remove(+id);
  }
}
