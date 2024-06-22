import { BASE_URL, DEFAULT_PAGE_SIZE } from '@/consts/consts';
import { HistoryItem } from '@/interfaces/history.interface';
import { PagedSearchResultsResponseDto } from '@/interfaces/search-response.interface';
import axios from 'axios';

const api = axios.create({
  baseURL: BASE_URL,
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
    const data: HistoryItem[] = response.data;
    return data.sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  } catch (error) {
    console.error('Fetch History API Error:', error);
    throw error;
  }
};
