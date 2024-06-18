import { Test, TestingModule } from '@nestjs/testing';
import { DuckDuckGoService } from './duckduckgo.service';

describe('DuckduckgoService', () => {
  let service: DuckDuckGoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DuckDuckGoService],
    }).compile();

    service = module.get<DuckDuckGoService>(DuckDuckGoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
