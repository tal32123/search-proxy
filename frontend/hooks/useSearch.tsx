import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { addSearchResults, setCurrentPage } from "@/redux/slices/searchSlice";
import { addHistoryItem } from "@/redux/slices/historySlice";
import { postHistoryItem, search } from "@/services/api/api.service";

export const useSearch = () => {
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

  return { results, currentPage, totalItems, searchTerm, isLoading, loadMoreData };
};
