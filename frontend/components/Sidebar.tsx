import { Typography } from 'antd';
import SimpleCard from './SimpleCard';
import { HistoryItem } from '@/interfaces/history.interface';
import SimpleList from './SimpleList';

const { Title } = Typography;

interface SidebarProps {
  history: HistoryItem[];
}

export default function Sidebar ({ history }: SidebarProps) {
  
  return (
    <div className="h-full flex flex-col">
      <div className="flex justify-center mt-4">
        <Title level={2} className="text-light">Search History</Title>
      </div>
      <SimpleList
        dataSource={history}
        renderItem={(item: HistoryItem) => (
          <SimpleCard title={item.query} content={new Date(item.createdAt).toLocaleString()} />
        )}
      />
    </div>
  );
};