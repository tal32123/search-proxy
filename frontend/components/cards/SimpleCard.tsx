import { Card, Tooltip } from 'antd';

interface SimpleCardProps {
  title: string;
  content: string;
  onClick: () => void;
}

export default function SimpleCard({ title, content, onClick }: SimpleCardProps) {
  return (
    <Tooltip title={title}>
      <Card bordered={false} style={{margin: 2}} onClick={onClick}>
        <div className="truncate">{title}</div>
        <div>{content}</div>
      </Card>
    </Tooltip>
  );
};
