import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SearchState {
  results: any | null;
}

const initialState: SearchState = {
  results: null,
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchResults: (state, action: PayloadAction<any>) => {
      state.results = action.payload;
    },
  },
});

export const { setSearchResults } = searchSlice.actions;
export default searchSlice.reducer;
