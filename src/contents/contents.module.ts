import { PrismaService } from '@database';
import { Module } from '@nestjs/common';
import { ContentsController } from './contents.controller';
import { ContentsService } from './contents.service';

@Module({
  controllers: [ContentsController],
  providers: [ContentsService, PrismaService]
})
export class ContentsModule {}
