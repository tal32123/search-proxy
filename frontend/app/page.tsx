"use client";
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Input } from 'antd';
import SearchContent from '../components/SearchContent';
import { setSearchResults } from '../redux/slices/searchSlice';
import { setHistory, addHistoryItem } from '../redux/slices/historySlice';
import { fetchHistory, search } from '@/services/api.service';

const { Search } = Input;

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState('');

  useEffect(() => {
    const loadHistory = async () => {
      const history = await fetchHistory();
      dispatch(setHistory(history));
    };

    loadHistory();
  }, [dispatch]);

  const handleSearch = async (value: string) => {
    if (value.trim() === '') return;
    const results = await search(value);
    dispatch(setSearchResults(results));
    dispatch(addHistoryItem({ id: new Date().toISOString(), query: value, createdAt: new Date().toISOString() }));
  };

  return (
    <div>
      <Search
        placeholder="Enter search query"
        enterButton="Search"
        size="large"
        onSearch={handleSearch}
      />
      <SearchContent />
    </div>
  );
};

export default Home;
