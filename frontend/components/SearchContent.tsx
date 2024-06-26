import React from "react";
import SimpleList from "./list/SimpleList";
import SearchResultCard from "./cards/SearchResultCard";
import { useSearch } from "@/hooks/useSearch";
import useTranslation from "@/i18n/useTranslation";
  
const SearchContent: React.FC = () => {
  const { results, currentPage, totalItems, searchTerm, isLoading, loadMoreData } = useSearch();
  const {t} = useTranslation();
  const countOccurrences = (text: string, term: string) => {
    const regex = new RegExp(term, "gi");
    return (text.match(regex) || []).length;
  };

  const totalOccurrences = results.reduce((acc: number, result: { title: string; url: string }) => {
    return acc + countOccurrences(result.title, searchTerm) + countOccurrences(result.url, searchTerm);
  }, 0);

  return (
    <div className="h-full">
      {searchTerm && (
        <div>
          <div>{t('OCCURRENCES')} {isLoading ? t('LOADING') : totalOccurrences}</div>
          <SimpleList
            dataSource={results}
            isDisableScroll={true}
            renderItem={(item) => (
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
};

export default SearchContent;
