import React from 'react';
import { Typography } from 'antd';
import SimpleCard from './SimpleCard';
import { HistoryItem } from '@/app/interfaces/history.interface';
import SimpleList from './SimpleList';

const { Title } = Typography;

interface SidebarProps {
  history: HistoryItem[];
}

const Sidebar: React.FC<SidebarProps> = ({ history }) => {
  return (
    <div className="h-full flex flex-col">
      <div className="flex justify-center mt-4">
        <Title level={2} className="text-light">Search History</Title>
      </div>
      <SimpleList
        dataSource={history}
        renderItem={(item : HistoryItem) => (
          <SimpleCard title={item.query} content={new Date(item.createdAt).toLocaleString()} />
        )}
      />
    </div>
  );
};

export default Sidebar;
