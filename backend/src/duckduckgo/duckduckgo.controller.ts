import { Controller, Get, Query } from '@nestjs/common';
import { DuckDuckGoService } from './duckduckgo.service';

@Controller('search')
export class DuckDuckGoController {
  constructor(private readonly duckDuckGoService: DuckDuckGoService) {}

  @Get()
  async search(@Query('q') query: string): Promise<any> {
    return this.duckDuckGoService.search(query);
  }
}
