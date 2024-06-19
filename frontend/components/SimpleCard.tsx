import React from 'react';
import { Card, Flex, Tooltip } from 'antd';

interface SimpleCardProps {
    title: string;
    content: string;
}

const SimpleCard: React.FC<SimpleCardProps> = ({ title, content }) => {
  return (
    <Tooltip title={title}>
      <Card bordered={false} className="mx-2 my-0 w-full max-w-full overflow-hidden">
        <div className="truncate">{title}</div>
        <div>{content}</div>
      </Card>
    </Tooltip>
  );
};

export default SimpleCard;
