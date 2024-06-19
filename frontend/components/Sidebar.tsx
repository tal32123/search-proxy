import React from 'react';
import { List, Typography } from 'antd';
import SimpleCard from './SimpleCard';

const { Title } = Typography;

interface SidebarProps {
  history: { id: string; query: string; createdAt: string }[];
}

const Sidebar: React.FC<SidebarProps> = ({ history }) => {
  return (
    <div className="h-full flex flex-col">
      <div className="flex justify-center mt-4">
        <Title level={2} className="text-light">Search History</Title>
      </div>
      <div className="flex-grow overflow-y-auto mt-0 custom-scrollbar">
        <List
          dataSource={history}
          renderItem={(item) => (
            <List.Item className="w-full p-0"
            style={{padding: "1"}}>
              <SimpleCard title={item.query} 
              content={new Date(item.createdAt).toLocaleString()}/>
            </List.Item>
          )}
          className="w-full"
        />
      </div>
    </div>
  );
};

export default Sidebar;
