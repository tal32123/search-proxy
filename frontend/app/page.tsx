"use client";
import { useEffect } from "react";
import { Input } from "antd";
import { setSearchResults } from "../redux/slices/searchSlice";
import { setHistory, addHistoryItem } from "../redux/slices/historySlice";
import { fetchHistory, search } from "@/services/api.service";
import { HistoryItem } from "../interfaces/history.interface";
import SearchContent from "@/components/SearchContent";
import { useDispatch } from "react-redux";

const { Search } = Input;

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const loadHistory = async () => {
      const history: HistoryItem[] = await fetchHistory();
      dispatch(setHistory(history));
    };

    loadHistory();
  }, [dispatch]);

  const handleSearch = async (value: string) => {
    if (value.trim() === "") return;
    const results = await search(value);
    dispatch(setSearchResults(results));
    dispatch(
      addHistoryItem({
        id: new Date().getTime(), // use getTime() for unique ID
        query: value,
        createdAt: new Date(),
      })
    );
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="p-4">
        <Search
          placeholder="Enter search query"
          enterButton="Search"
          size="large"
          onSearch={handleSearch}
        />
      </div>
      <div className="flex-grow overflow-y-auto">
        <SearchContent />
      </div>
    </div>
  );
};

export default Home;
