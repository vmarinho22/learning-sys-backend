import { Test, TestingModule } from '@nestjs/testing';
import { HistoricsController } from './historics.controller';
import { HistoricsService } from './historics.service';

describe('HistoricsController', () => {
  let controller: HistoricsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HistoricsController],
      providers: [HistoricsService]
    }).compile();

    controller = module.get<HistoricsController>(HistoricsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
