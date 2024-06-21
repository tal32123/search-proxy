import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import SimpleList from "./SimpleList";
import { SearchResponseDto } from "@/interfaces/search-response.interface";
import SearchResultCard from "./cards/SearchResultCard";
interface SearchContentProps {
  searchTerm: string;
}
export default function SearchContent({ searchTerm }: SearchContentProps)  {
  const results = useSelector((state: RootState) => state.search.results);

  return (
    <div className="flex-grow overflow-y-auto custom-scrollbar max-h-full">
      <h2>Search Results</h2>
      {results && results.length > 0 ? (
        <SimpleList
          dataSource={results}
          renderItem={(item: SearchResponseDto) => (
            <SearchResultCard title={item.title} url={item.url} searchTerm={searchTerm} />
          )}
        />
      ) : (
        <p>No results to display</p>
      )}
    </div>
  );
}
