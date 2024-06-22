import { Controller, Get, Query } from '@nestjs/common';
import { DuckDuckGoService } from './duckduckgo.service';
import { SearchResponseDto } from './dtos/search-response.dto';

@Controller('search')
export class DuckDuckGoController {
  constructor(private readonly duckDuckGoService: DuckDuckGoService) {}

  @Get()
  async search(
    @Query('q') query: string,
    @Query('page') page: string = "1",
    @Query('pageSize') pageSize: string = "2"
  ): Promise<SearchResponseDto[]> {
    let numPageSize = parseInt(pageSize);
    let numPage = parseInt(page);

    let result = await this.duckDuckGoService.search(query, numPage, numPageSize);
    console.log(result);
    return result;
  }
}
