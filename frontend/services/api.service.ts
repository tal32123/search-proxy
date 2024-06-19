import { SearchResponseDto } from '@/app/interfaces/search-response.interface';
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

export const search = async (query: string): Promise<SearchResponseDto[]> => {
    try {
      const response = await api.get<SearchResponseDto[]>(`/search?q=${query}`);
      return response.data;
    } catch (error) {
      console.error('Search API Error:', error);
      throw error;
    }
  };
  

  export const fetchHistory = async () => {
    try {
      const response = await api.get('/history');
      return response.data;
    } catch (error) {
      console.error('Fetch History API Error:', error);
      throw error;
    }
  };