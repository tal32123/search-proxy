"use client";
import { useEffect, useState } from "react";
import { Input } from "antd";
import { setSearchResults } from "../redux/slices/searchSlice";
import { setHistory, addHistoryItem } from "../redux/slices/historySlice";
import { fetchHistory, search } from "@/services/api.service";
import { HistoryItem } from "../interfaces/history.interface";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import SearchContent from "@/components/SearchContent";

const { Search } = Input;

const Home = () => {
  const dispatch = useDispatch();
  const searchResults = useSelector((state: RootState) => state.search.results);
  const [searchTerm, setSearchTerm] = useState("");

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
    const results = await search(value);
    dispatch(setSearchResults(results));
    dispatch(
      addHistoryItem({
        id: new Date().getTime(),
        query: value,
        createdAt: new Date(),
      })
    );
  };

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
      </div>
    </div>
  );
};

export default Home;
