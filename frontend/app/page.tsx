"use client";
import { useEffect } from "react";
import { Input } from "antd";
import { addSearchResults, resetSearch, setCurrentPage, setSearchTerm } from "../redux/slices/searchSlice";
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
  const searchTerm = useSelector((state: RootState) => state.search.searchTerm);

  useEffect(() => {
    const loadHistory = async () => {
      const history: HistoryItem[] = (await fetchHistory()).sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
      dispatch(setHistory(history));
    };

    loadHistory();
  }, [dispatch]);

  const handleSearch = async (value: string) => {
    if (value.trim() === "") return;
    dispatch(resetSearch());
    dispatch(setSearchTerm(value));
    dispatch(
      addHistoryItem({
        id: new Date().getTime(),
        query: value,
        createdAt: new Date(),
      })
    );
    const response = await search(value, 1);
    dispatch(addSearchResults(response));
    dispatch(setCurrentPage(1));
  };

  const countOccurrences = (text: string, term: string) => {
    const regex = new RegExp(term, "gi");
    return (text.match(regex) || []).length;
  };

  const totalOccurrences = searchResults.reduce(
    (acc: number, result: { title: string; url: string }) => {
      return (
        acc +
        countOccurrences(result.title, searchTerm) +
        countOccurrences(result.url, searchTerm)
      );
    },
    0
  );

  return (
    <div className="flex flex-col h-screen">
      <div className="p-4">
        <Search
          placeholder="Enter search query"
          enterButton="Search"
          size="large"
          onSearch={handleSearch}
          value={searchTerm}
          onChange={(e) => dispatch(setSearchTerm(e.target.value))}
        />
        {searchTerm && <div>Occurrences: {totalOccurrences}</div>}
      </div>
      <div className="flex-grow overflow-y-auto flex">
        <div className="flex-grow overflow-y-auto">
          <SearchContent />
        </div>
      </div>
    </div>
  );
};

export default Home;
