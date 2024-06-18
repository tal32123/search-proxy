import React from 'react';
import { Card, Tooltip } from 'antd';

interface SearchHistoryItemProps {
  item: {
    id: string;
    query: string;
    createdAt: string;
  };
}

const SearchHistoryItem: React.FC<SearchHistoryItemProps> = ({ item }) => {
  return (
    <Tooltip title={item.query}>
      <Card bordered={false} className="mx-2 w-full max-w-xs">
        <div className="truncate">{item.query}</div>
        <div>{new Date(item?.createdAt).toLocaleString()}</div>
      </Card>
    </Tooltip>
  );
};

export default SearchHistoryItem;
