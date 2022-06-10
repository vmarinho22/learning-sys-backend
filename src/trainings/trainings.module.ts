import { PrismaService } from '@database';
import { Module } from '@nestjs/common';
import { TrainingsController } from './trainings.controller';
import { TrainingsService } from './trainings.service';

@Module({
  controllers: [TrainingsController],
  providers: [TrainingsService, PrismaService]
})
export class TrainingsModule {}
