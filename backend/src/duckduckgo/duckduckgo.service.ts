import { Injectable } from '@nestjs/common';
import { map } from 'rxjs/operators';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';
import { HistoryService } from '../history/history.service';
import { SearchResponseDto } from './dtos/search-response.dto';
import { DuckDuckGoRelatedTopic, DuckDuckGoResponse } from './entities/duckduckgo-response.interface';

@Injectable()
export class DuckDuckGoService {
  constructor(
    private readonly httpService: HttpService,
    private readonly historyService: HistoryService
  ) {}

  async search(query: string, page: number, pageSize: number): Promise<SearchResponseDto[]> {
    const url = `http://api.duckduckgo.com/?q=${query}&format=json`;
    const response = await lastValueFrom(this.httpService.get<DuckDuckGoResponse>(url).pipe(
      map(response => response.data)
    ));
    await this.historyService.create(query);
    
    // Process response to extract URL and title
    const results: SearchResponseDto[] = this.extractResults(response.RelatedTopics);

    // Implement paging
    const startIndex: number = (page - 1) * pageSize;
    const endIndex: number = startIndex + pageSize;
    const pagedResults : SearchResponseDto[] = results.slice(startIndex, endIndex);

    return pagedResults;
  }

  private extractResults(topics: DuckDuckGoRelatedTopic[]): SearchResponseDto[] {
    let results: SearchResponseDto[] = [];

    topics.forEach(topic => {
      if (topic.FirstURL && topic.Text) {
        results.push({ url: topic.FirstURL, title: topic.Text });
      }

      if (topic.Topics) {
        results = results.concat(this.extractResults(topic.Topics));
      }
    });

    return results;
  }
}
