import { Card, Tooltip } from 'antd';

interface SimpleCardProps {
  title: string;
  content: string;
  onClick: () => void;
}

export default function SimpleCard({ title, content, onClick }: SimpleCardProps) {
  return (
    <Tooltip title={title}>
      <Card bordered={false} className="mx-2 my-0 w-full max-w-full overflow-hidden" onClick={onClick}>
        <div className="truncate">{title}</div>
        <div>{content}</div>
      </Card>
    </Tooltip>
  );
};
