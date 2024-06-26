import React from "react";
import { List, Pagination } from "antd";
import { DEFAULT_PAGE_SIZE } from "@/consts/consts";

interface SimpleListProps<T> {
  dataSource: T[];
  renderItem: (item: T) => React.ReactNode;
  loadMoreData?: (page: number) => void;
  totalItems?: number;
  currentPage?: number;
  pageSize?: number;
  isPaginated?: boolean;
  isDisableScroll?: boolean;
}

export default function SimpleList<T>({
  dataSource,
  renderItem,
  loadMoreData,
  totalItems,
  currentPage,
  pageSize = DEFAULT_PAGE_SIZE,
  isPaginated = false,
  isDisableScroll = false,
}: SimpleListProps<T>) {
  if (
    isPaginated &&
    (currentPage == undefined ||
      loadMoreData == undefined ||
      totalItems == undefined)
  ) {
    throw new Error("Must have all properties for pagination if paginating");
  }
  let isLoading = false;
  const handlePageChange = (page: number) => {
    isLoading = true;
    loadMoreData && loadMoreData(page);
    isLoading = false;
  };

  return (
    <div
      className={`${
        isDisableScroll
          ? ""
          : "flex-grow overflow-y-auto custom-scrollbar max-h-full"
      }`}
    >
      <List
        dataSource={dataSource}
        renderItem={renderItem}
        loading={isLoading}
        //antd only takes inline style many times
        style={{height: 1000}}
      />
      {isPaginated && dataSource.length > 0 && (
        <div className="mt-4 flex justify-center">
          <Pagination
            current={currentPage}
            pageSize={pageSize}
            total={totalItems}
            showSizeChanger={false}
            onChange={handlePageChange}
          />
        </div>
      )}
    </div>
  );
}
