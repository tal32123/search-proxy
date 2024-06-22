import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import SimpleList from "./SimpleList";
import { search } from "@/services/api.service";
import { addSearchResults, setCurrentPage } from "@/redux/slices/searchSlice";
import { SearchResponseDto } from "@/interfaces/search-response.interface";
import SearchResultCard from "./cards/SearchResultCard";

export default function SearchContent() {
  const dispatch = useDispatch();
  const results = useSelector((state: RootState) => state.search.results);
  const currentPage = useSelector((state: RootState) => state.search.currentPage);
  const totalItems = useSelector((state: RootState) => state.search.totalItems);
  const searchTerm = useSelector((state: RootState) => state.search.searchTerm);

  const loadMoreData = async (page: number) => {
    const response = await search(searchTerm, page);
    dispatch(addSearchResults(response));
    dispatch(setCurrentPage(page));
  };

  useEffect(() => {
    if (results.length === 0 && searchTerm) {
      loadMoreData(1);
    }
  }, [searchTerm]);

  return (
    <div>
      {searchTerm && (
        <SimpleList
          dataSource={results}
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
