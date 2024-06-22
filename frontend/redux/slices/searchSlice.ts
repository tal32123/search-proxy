import { PagedSearchResultsResponseDto, SearchResponseDto } from '@/interfaces/search-response.interface';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SearchState {
  results: SearchResponseDto[];
  currentPage: number;
  totalItems: number;
  searchTerm: string;
}

const initialState: SearchState = {
  results: [],
  currentPage: 1,
  totalItems: 0,
  searchTerm: ''
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    addSearchResults: (state, action: PayloadAction<PagedSearchResultsResponseDto>) => {
      state.results = action.payload.results;
    },
    resetSearch: (state) => {
      state.results = [];
      state.currentPage = 1;
      state.totalItems = 0;
      state.searchTerm = '';
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setTotalItems: (state, action: PayloadAction<number>) => {
      state.totalItems = action.payload;
    },
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    }
  }
});

export const { addSearchResults, resetSearch, setCurrentPage, setTotalItems, setSearchTerm } = searchSlice.actions;
export default searchSlice.reducer;
