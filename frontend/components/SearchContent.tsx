import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const SearchContent: React.FC = () => {
  const results = useSelector((state: RootState) => state.search.results);

  return (
    <div>
      <h2>Search Results</h2>
      {results ? (
        <pre>{JSON.stringify(results, null, 2)}</pre>
      ) : (
        <p>No results to display</p>
      )}
    </div>
  );
};

export default SearchContent;
