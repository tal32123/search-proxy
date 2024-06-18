import React from 'react';
import { List, Typography } from 'antd';
import SearchHistoryItem from './SearchHistoryItem';

const { Title } = Typography;

interface SidebarProps {
  history: { id: string; query: string; createdAt: string }[];
}

const Sidebar: React.FC<SidebarProps> = ({ history }) => {
  return (
    <div className="h-full overflow-y-auto">
      <div className="flex justify-center mt-4">
        <Title level={2} className="text-light">Search History</Title>
      </div>
      <List
        dataSource={history}
        renderItem={(item) => (
          <List.Item className="w-full">
            <SearchHistoryItem item={item} />
          </List.Item>
        )}
        className="w-full"
      />
    </div>
  );
};

export default Sidebar;
