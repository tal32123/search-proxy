import { configureStore } from '@reduxjs/toolkit';
import historyReducer from './slices/historySlice';
import searchReducer from './slices/searchSlice';
import { useDispatch, TypedUseSelectorHook, useSelector, useStore } from 'react-redux';

export const makeStore = () => {
  return configureStore({
    reducer: {
      history: historyReducer,
      search: searchReducer,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

// Custom hooks
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppStore = () => useStore<AppStore>();
