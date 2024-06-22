import { Controller, Get, Query } from '@nestjs/common';
import { DuckDuckGoService } from './duckduckgo.service';
import { SearchResponseDto } from './dtos/search-response.dto';

@Controller('search')
export class DuckDuckGoController {
  constructor(private readonly duckDuckGoService: DuckDuckGoService) {}

  @Get()
  async search(
    @Query('q') query: string,
    @Query('page') page: number = 1,
    @Query('pageSize') pageSize: number = 2
  ): Promise<SearchResponseDto[]> {
    console.log(pageSize);
    console.log(page);
    let result = await this.duckDuckGoService.search(query, page, pageSize);
    console.log(result);
    return result;
  }
}
