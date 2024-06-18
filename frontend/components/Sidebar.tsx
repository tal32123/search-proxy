import React from 'react';
import { List, Typography } from 'antd';
import SearchHistoryItem from './SearchHistoryItem';

const { Title } = Typography;

interface SidebarProps {
  history: { id: string; query: string; createdAt: string }[];
}

const Sidebar: React.FC<SidebarProps> = ({ history }) => {
  return (

      <div>
        <Title level={2} className="text-light">Search History</Title>
        <List
          dataSource={history}
          renderItem={(item) => (
            <List.Item>
              <SearchHistoryItem item={item} />
            </List.Item>
          )}
        />
      </div>
  );
};

export default Sidebar;
