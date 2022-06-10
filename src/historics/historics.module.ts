import { PrismaService } from '@database';
import { Module } from '@nestjs/common';
import { HistoricsController } from './historics.controller';
import { HistoricsService } from './historics.service';

@Module({
  controllers: [HistoricsController],
  providers: [HistoricsService, PrismaService]
})
export class HistoricsModule {}
