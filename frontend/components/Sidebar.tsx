 import { Typography } from "antd";
import { HistoryItem } from "@/interfaces/history.interface";
import SimpleList from "./list/SimpleList";
import { useDispatch } from "react-redux";
import { setSearchTerm } from "@/redux/slices/searchSlice";
import SimpleCard from "./cards/SimpleCard";
import useTranslation from "@/i18n/useTranslation";

const { Title } = Typography;

interface SidebarProps {
  history: HistoryItem[];
}

export default function Sidebar({ history }: SidebarProps) {
  const dispatch = useDispatch();
  const {t} = useTranslation();
  const handleCardClick = (query: string) => {
    dispatch(setSearchTerm(query));
  };

  return (
    <div className="h-full flex flex-col">
      <div className="flex justify-center mt-4">
        <Title level={2} className="text-light">
          {t('SEARCH_HISTORY')}
        </Title>
      </div>
      <SimpleList<HistoryItem>
        dataSource={history}
        renderItem={(item: HistoryItem) => (
          <SimpleCard
            title={item.query}
            content={new Date(item.createdAt).toLocaleString()}
            onClick={() => handleCardClick(item.query)}
          />
        )}
      />
    </div>
  );
}
