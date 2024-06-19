import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import SimpleList from './SimpleList';
import SimpleCard from './SimpleCard';
import { SearchResponseDto } from '@/app/interfaces/search-response.interface';

const SearchContent: React.FC = () => {
  const results = useSelector((state: RootState) => state.search.results);

  return (
    <div className="flex-grow overflow-y-auto custom-scrollbar max-h-full">
      <h2>Search Results</h2>
      {results && results.length > 0 ? (
        <SimpleList
          dataSource={results}
          renderItem={(item: SearchResponseDto) => (
            <SimpleCard title={item.title} content={item.url} />
          )}
        />
      ) : (
        <p>No results to display</p>
      )}
    </div>
  );
};

export default SearchContent;
