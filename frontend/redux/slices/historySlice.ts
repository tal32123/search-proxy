import { HistoryItem } from '@/interfaces/history.interface';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface HistoryState {
  items: HistoryItem[];
}

const initialState: HistoryState = {
  items: [],
};

const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    addHistoryItem: (state, action: PayloadAction<HistoryItem>) => {
      state.items.unshift(action.payload);
    },
    setHistory: (state, action: PayloadAction<HistoryItem[]>) => {
      state.items = action.payload;
    },
  },
});

export const { addHistoryItem, setHistory } = historySlice.actions;
export default historySlice.reducer;
