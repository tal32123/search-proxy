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
      state.totalItems = action.payload.totalItems;
    },
    resetSearch: (state) => {
      state = initialState;
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    }
  }
});

export const { addSearchResults, resetSearch, setCurrentPage, setSearchTerm } = searchSlice.actions;
export default searchSlice.reducer;
