import React, { useEffect } from "react";
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

  const loadMoreData = async (page: number) => {
    try {
      const response = await search(searchTerm, page);
      dispatch(addSearchResults(response));
      dispatch(setCurrentPage(page));
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  useEffect(() => {
    const fetchDataAndPostHistory = async () => {
      if (searchTerm) {
        try {
          await loadMoreData(1);
          const newHistoryItem = await postHistoryItem({ search: searchTerm });
          dispatch(addHistoryItem(newHistoryItem));
        } catch (error) {
          console.error('Error during search or posting history:', error);
        }
      }
    };

    fetchDataAndPostHistory();
  }, [searchTerm, dispatch]);

  return (
    <div className="h-full">
      {searchTerm && (
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
      )}
    </div>
  );
}
