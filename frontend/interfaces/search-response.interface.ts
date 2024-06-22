
export interface SearchResponseDto {
  url: string;
  title: string;
}
export interface PagedSearchResultsResponseDto {
  results: SearchResponseDto[];
  totalItems: number;
}