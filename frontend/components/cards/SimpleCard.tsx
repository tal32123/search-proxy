import { Card, Tooltip } from 'antd';

interface SimpleCardProps {
    title: string;
    content: string;
}

export default function SimpleCard ({ title, content }: SimpleCardProps) {
  return (
    <Tooltip title={title}>
      <Card bordered={false} className="mx-2 my-0 w-full max-w-full overflow-hidden">
        <div className="truncate">{title}</div>
        <div>{content}</div>
      </Card>
    </Tooltip>
  );
};