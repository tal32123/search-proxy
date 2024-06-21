import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import SimpleList from "./SimpleList";
import { SearchResponseDto } from "@/interfaces/search-response.interface";
import SearchResultCard from "./SearchResultCard";

export default function SearchContent() {
  const results = useSelector((state: RootState) => state.search.results);

  return (
    <div className="flex-grow overflow-y-auto custom-scrollbar max-h-full">
      <h2>Search Results</h2>
      {results && results.length > 0 ? (
        <SimpleList
          dataSource={results}
          renderItem={(item: SearchResponseDto) => (
            <SearchResultCard title={item.title} url={item.url} />
          )}
        />
      ) : (
        <p>No results to display</p>
      )}
    </div>
  );
}
