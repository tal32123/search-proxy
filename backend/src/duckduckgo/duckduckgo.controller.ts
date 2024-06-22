import { Controller, Get, Query } from '@nestjs/common';
import { DuckDuckGoService } from './duckduckgo.service';
import { PagedSearchResultsResponseDto } from './dtos/search-response.dto';

@Controller('search')
export class DuckDuckGoController {
  constructor(private readonly duckDuckGoService: DuckDuckGoService) {}
  readonly INITIAL_PAGE: string = "1";
  readonly DEFAULT_PAGE_SIZE: string = "2";
  @Get()
  async search(
    @Query('q') query: string,
    @Query('page') page: string = this.INITIAL_PAGE,
    @Query('pageSize') pageSize: string = this.DEFAULT_PAGE_SIZE
  ): Promise<PagedSearchResultsResponseDto> {
    let numPageSize = parseInt(pageSize);
    let numPage = parseInt(page);

    let result = await this.duckDuckGoService.search(query, numPage, numPageSize);
    return result;
  }
}
