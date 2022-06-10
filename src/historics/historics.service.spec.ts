import { Test, TestingModule } from '@nestjs/testing';
import { HistoricsService } from './historics.service';

describe('HistoricsService', () => {
  let service: HistoricsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HistoricsService]
    }).compile();

    service = module.get<HistoricsService>(HistoricsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
