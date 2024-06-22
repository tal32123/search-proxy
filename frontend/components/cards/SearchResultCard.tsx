import { Card, Tooltip } from 'antd';

interface SearchResultCardProps {
  title: string;
  url: string;
  searchTerm: string;
}

export default function SearchResultCard({ title, url, searchTerm }: SearchResultCardProps) {
  const highlightText = (text: string, highlight: string) => {
    if (!highlight.trim()) {
      return text;
    }
  
    const regex = new RegExp(`(${highlight})`, 'gi');
    const parts = text.split(regex);
  
    return parts.map((part, i) => 
      part.toLowerCase() === highlight.toLowerCase() ? <mark key={i}>{part}</mark> : part
    );
  };

  return (
    <Tooltip title={title}>
      <Card bordered={false} className="mx-2 my-0 w-full max-w-full overflow-hidden">
        <a href={url} className="truncate">
          {highlightText(title, searchTerm)}
        </a>
        <div>{highlightText(url, searchTerm)}</div>
      </Card>
    </Tooltip>
  );
}
