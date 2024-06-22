import { Card, Tooltip } from "antd";
import styles from "./CardStyles.module.css";

interface SearchResultCardProps {
  title: string;
  url: string;
  searchTerm: string;
}

export default function SearchResultCard({
  title,
  url,
  searchTerm,
}: SearchResultCardProps) {
  const highlightText = (text: string, highlight: string) => {
    if (!highlight.trim()) {
      return text;
    }

    const regex = new RegExp(`(${highlight})`, "gi");
    const parts = text.split(regex);

    return parts.map((part, i) =>
      part.toLowerCase() === highlight.toLowerCase() ? (
        <mark key={i}>{part}</mark>
      ) : (
        part
      )
    );
  };

  return (
    <Tooltip title={title}>
      <div className={styles.card}>
        <Card bordered={false}>
          <a href={url} className="truncate">
            <div className="text-dark truncate">{highlightText(title, searchTerm)}</div>
            {/* I show the url here for security purposes so that it can be validated against the title*/}
            <div className="truncate">{highlightText(url, searchTerm)}</div>
          </a>
        </Card>
      </div>
    </Tooltip>
  );
}
