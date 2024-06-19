import React from 'react';
import { List } from 'antd';

interface SimpleListProps<T> {
  dataSource: T[];
  renderItem: (item: T) => React.ReactNode;
}

const SimpleList = <T,>({ dataSource, renderItem }: SimpleListProps<T>) => {
  return (
    <div className="flex-grow overflow-y-auto custom-scrollbar max-h-full">
      <List
        dataSource={dataSource}
        renderItem={(item) => (
          <List.Item className="w-full p-0" style={{ padding: '1' }}>
            {renderItem(item)}
          </List.Item>
        )}
        className="w-full"
      />
    </div>
  );
};

export default SimpleList;
