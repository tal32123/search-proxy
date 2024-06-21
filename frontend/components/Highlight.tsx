import exp from 'constants';

interface HighlightProps {
  text: string;
  highlight: string;
}

export default function Highlight ({ text, highlight } : HighlightProps) {
  if (!highlight.trim()) {
    return <span>{text}</span>;
  }
  
  const regex = new RegExp(`(${highlight})`, 'gi');
  const parts = text.split(regex);

  return (
    <span>
      {parts.map((part, i) => 
        part.toLowerCase() === highlight.toLowerCase() ? <mark key={i}>{part}</mark> : part
      )}
    </span>
  );
};
