import { Card, Tooltip } from 'antd';
import Highlight from '../Highlight';
interface SearchResultCardProps {
  title: string;
  url: string;
  searchTerm: string;
}

export default function SearchResultCard({ title, url, searchTerm }: SearchResultCardProps) {
  return (
    <Tooltip title={title}>
      <Card bordered={false} className="mx-2 my-0 w-full max-w-full overflow-hidden">
        <a href={url} className="truncate">
          <Highlight text={title} highlight={searchTerm} />
        </a>
        <div><Highlight text={url} highlight={searchTerm} /></div>
      </Card>
    </Tooltip>
  );
}
