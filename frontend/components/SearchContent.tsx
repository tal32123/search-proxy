import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import SimpleList from "./SimpleList";
import { addSearchResults, setCurrentPage } from "@/redux/slices/searchSlice";
import { SearchResponseDto } from "@/interfaces/search-response.interface";
import SearchResultCard from "./cards/SearchResultCard";
import { addHistoryItem } from "@/redux/slices/historySlice";
import { postHistoryItem, search } from "@/services/api/api.service";
 
export default function SearchContent() {
  const dispatch = useDispatch();
  const results = useSelector((state: RootState) => state.search.results);
  const currentPage = useSelector((state: RootState) => state.search.currentPage);
  const totalItems = useSelector((state: RootState) => state.search.totalItems);
  const searchTerm = useSelector((state: RootState) => state.search.searchTerm);
  const [isLoading, setIsLoading] = useState(false);

  const loadMoreData = async (page: number) => {
    try {
      setIsLoading(true);
      const response = await search(searchTerm, page);
      dispatch(addSearchResults(response));
      dispatch(setCurrentPage(page));
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching search results:', error);
      setIsLoading(false);
    }
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

  useEffect(() => {
    const fetchDataAndPostHistory = async () => {
      if (searchTerm) {
        try {
          setIsLoading(true);
          await loadMoreData(1);
          const newHistoryItem = await postHistoryItem({ search: searchTerm });
          dispatch(addHistoryItem(newHistoryItem));
          setIsLoading(false);
        } catch (error) {
          console.error('Error during search or posting history:', error);
          setIsLoading(false);
        }
      }
    };

    fetchDataAndPostHistory();
  }, [searchTerm, dispatch]);

  return (
    <div className="h-full">
      {searchTerm && (
        <div>
          <div>Occurrences: {isLoading ? "Loading..." : totalOccurrences}</div>
          <SimpleList
            dataSource={results}
            isDisableScroll={true}
            renderItem={(item: SearchResponseDto) => (
              <SearchResultCard
                key={item.url}
                title={item.title}
                url={item.url}
                searchTerm={searchTerm}
              />
            )}
            loadMoreData={loadMoreData}
            totalItems={totalItems}
            currentPage={currentPage}
            isPaginated={true}
          />
        </div>
      )}
    </div>
  );
}
