import { Card, Tooltip } from "antd";
import styles from "./CardStyles.module.css";

interface SimpleCardProps {
  title: string;
  content: string;
  onClick: () => void;
}

export default function SimpleCard({
  title,
  content,
  onClick,
}: SimpleCardProps) {
  return (
    <Tooltip title={title}>
      <div className={styles.card}>
        <Card bordered={false} onClick={onClick}>
          <div className="truncate">{title}</div>
          <div className="truncate">{content}</div>
        </Card>
      </div>
    </Tooltip>
  );
}
