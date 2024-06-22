import { PagedSearchResultsResponseDto, SearchResponseDto } from '@/interfaces/search-response.interface';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SearchState {
  results: SearchResponseDto[];
  currentPage: number;
  totalItems: number;
}

const initialState: SearchState = {
  results: [],
  currentPage: 1,
  totalItems: 0,
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchResults(state, action: PayloadAction<SearchResponseDto[]>) {
      state.results = action.payload;
    },
    addSearchResults(state, action: PayloadAction<PagedSearchResultsResponseDto>) {
      state.results = action.payload.results;
      state.totalItems = action.payload.totalItems;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    resetSearch(state) {
      state.results = [];
      state.currentPage = 1;
      state.totalItems = 0;
    },
  },
});

export const { setSearchResults, addSearchResults, setCurrentPage, resetSearch } = searchSlice.actions;

export default searchSlice.reducer;
