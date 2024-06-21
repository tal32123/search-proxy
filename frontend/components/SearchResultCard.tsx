import { Card, Tooltip } from 'antd';

interface SearchResultCardProps {
  title: string;
  url: string;
}

export default function SearchResultCard({ title, url }: SearchResultCardProps) {
  return (
    <Tooltip title={title}>
      <Card bordered={false} className="mx-2 my-0 w-full max-w-full overflow-hidden">
        <a href={url} className="truncate">
          {title}
        </a>
      </Card>
    </Tooltip>
  );
}
