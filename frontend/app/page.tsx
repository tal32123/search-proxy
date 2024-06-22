"use client";
import { useEffect, useState } from "react";
import { Input, Button } from "antd";
import { setHistory } from "../redux/slices/historySlice";
import { getHistory } from "@/services/api/api.service";
import { HistoryItem } from "../interfaces/history.interface";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import SearchContent from "@/components/SearchContent";
import { setSearchTerm, resetSearch } from "@/redux/slices/searchSlice";

const Home = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state: RootState) => state.search.searchTerm);
  const [inputValue, setInputValue] = useState(searchTerm);

  useEffect(() => {
    const loadHistory = async () => {
      const history: HistoryItem[] = await getHistory();
      dispatch(setHistory(history));
    };

    loadHistory();
  }, [dispatch]);

  useEffect(() => {
    setInputValue(searchTerm);
  }, [searchTerm]);

  const handleSearch = async () => {
    if (inputValue.trim() === "") return;
    dispatch(resetSearch());
    dispatch(setSearchTerm(inputValue));
  };

  const countOccurrences = (text: string, term: string) => {
    const regex = new RegExp(term, "gi");
    return (text.match(regex) || []).length;
  };

  const totalOccurrences = useSelector(
    (state: RootState) => state.search.results
  ).reduce((acc: number, result: { title: string; url: string }) => {
    return (
      acc +
      countOccurrences(result.title, searchTerm) +
      countOccurrences(result.url, searchTerm)
    );
  }, 0);

  return (
    <div className="flex flex-col">
      <div className="flex items-center flex-col sm:flex-row">
        <Input
          placeholder="Enter search query"
          size="large"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onPressEnter={handleSearch}
          style={{ margin: 8 }}
        />
        <Button
          type="primary"
          disabled={!inputValue}
          size="large"
          onClick={handleSearch}
        >
          Search
        </Button>
      </div>
      {searchTerm && <div>Occurrences: {totalOccurrences}</div>}
      <SearchContent />
    </div>
  );
};

export default Home;
