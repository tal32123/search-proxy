import { Test, TestingModule } from '@nestjs/testing';
import { DuckDuckGoController } from './duckduckgo.controller';
import { DuckDuckGoService } from './duckduckgo.service';

describe('DuckduckgoController', () => {
  let controller: DuckDuckGoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DuckDuckGoController],
      providers: [DuckDuckGoService],
    }).compile();

    controller = module.get<DuckDuckGoController>(DuckDuckGoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
