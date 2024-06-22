"use client";
import { useEffect, useState, useCallback } from "react";
import { Input } from "antd";
import { addSearchResults, incrementPage, resetSearch } from "../redux/slices/searchSlice";
import { setHistory, addHistoryItem } from "../redux/slices/historySlice";
import { fetchHistory, search } from "@/services/api.service";
import { HistoryItem } from "../interfaces/history.interface";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import SearchContent from "@/components/SearchContent";
import { Spin } from "antd";

const { Search } = Input;

const Home = () => {
  const dispatch = useDispatch();
  const searchResults = useSelector((state: RootState) => state.search.results);
  const currentPage = useSelector((state: RootState) => state.search.currentPage);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadHistory = async () => {
      const history: HistoryItem[] = await fetchHistory();
      dispatch(setHistory(history));
    };

    loadHistory();
  }, [dispatch]);

  const handleSearch = async (value: string) => {
    if (value.trim() === "") return;
    setSearchTerm(value);
    dispatch(resetSearch());
    await fetchResults(value, 1);
    dispatch(
      addHistoryItem({
        id: new Date().getTime(),
        query: value,
        createdAt: new Date(),
      })
    );
  };

  const fetchResults = async (query: string, page: number) => {
    setLoading(true);
    const results = await search(query, page);
    dispatch(addSearchResults(results));
    dispatch(incrementPage());
    setLoading(false);
  };

  const handleScroll = useCallback(() => {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || loading) {
      return;
    }
    fetchResults(searchTerm, currentPage);
  }, [searchTerm, currentPage, loading]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const countOccurrences = (text: string, term: string) => {
    const regex = new RegExp(term, 'gi');
    return (text.match(regex) || []).length;
  };

  const totalOccurrences = searchResults.reduce((acc: number, result: { title: string; url: string; }) => {
    return acc + countOccurrences(result.title, searchTerm) + countOccurrences(result.url, searchTerm);
  }, 0);

  return (
    <div className="flex flex-col h-screen">
      <div className="p-4">
        <Search
          placeholder="Enter search query"
          enterButton="Search"
          size="large"
          onSearch={handleSearch}
        />
        {searchTerm && <div>Occurrences: {totalOccurrences}</div>}
      </div>
      <div className="flex-grow overflow-y-auto">
        <SearchContent searchTerm={searchTerm} />
        {loading && <Spin />}
      </div>
    </div>
  );
};

export default Home;
