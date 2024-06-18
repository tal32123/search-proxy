import { Injectable } from '@nestjs/common';
import { map } from 'rxjs/operators';
import { HistoryService } from '../history/history.service';
import { lastValueFrom } from 'rxjs';
import { HttpService } from '@nestjs/axios';
import { DuckDuckGoResponse } from './entities/duckduckgo-response.interface';
 
@Injectable()
export class DuckDuckGoService {
  constructor(
    private readonly httpService: HttpService,
    private readonly historyService: HistoryService
  ) {}

  async search(query: string): Promise<DuckDuckGoResponse> {
    const url = `http://api.duckduckgo.com/?q=${query}&format=json`;
    const response = await lastValueFrom(this.httpService.get<DuckDuckGoResponse>(url).pipe(
      map(response => response.data)
    ));
    await this.historyService.create(query);
    return response;
  }
}
