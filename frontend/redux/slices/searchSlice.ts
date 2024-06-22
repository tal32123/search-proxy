import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SearchResponseDto } from '@/interfaces/search-response.interface';

interface SearchState {
  results: SearchResponseDto[];
  currentPage: number;
}

const initialState: SearchState = {
  results: [],
  currentPage: 1,
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchResults(state, action: PayloadAction<SearchResponseDto[]>) {
      state.results = action.payload;
    },
    addSearchResults(state, action: PayloadAction<SearchResponseDto[]>) {
      state.results = [...state.results, ...action.payload];
    },
    incrementPage(state) {
      state.currentPage += 1;
    },
    resetSearch(state) {
      state.results = [];
      state.currentPage = 1;
    },
  },
});

export const { setSearchResults, addSearchResults, incrementPage, resetSearch } = searchSlice.actions;

export default searchSlice.reducer;
