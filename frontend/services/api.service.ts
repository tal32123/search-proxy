import { DEFAULT_PAGE_SIZE } from '@/consts/consts';
import { HistoryItem } from '@/interfaces/history.interface';
import { PagedSearchResultsResponseDto } from '@/interfaces/search-response.interface';
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

export const search = async (query: string, page: number = 1, pageSize: number = DEFAULT_PAGE_SIZE): Promise<PagedSearchResultsResponseDto> => {
  try {
    const response = await api.get<PagedSearchResultsResponseDto>(`/search?q=${query}&page=${page}&pageSize=${pageSize}`);
    return response.data;
  } catch (error) {
    console.error('Search API Error:', error);
    throw error;
  }
};

export const fetchHistory = async (): Promise<HistoryItem[]> => {
  try {
    const response = await api.get('/history');
    return response.data;
  } catch (error) {
    console.error('Fetch History API Error:', error);
    throw error;
  }
};
