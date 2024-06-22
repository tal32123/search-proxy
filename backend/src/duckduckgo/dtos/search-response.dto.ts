export class SearchResponseDto {
  url: string;
  title: string;
}
export class PagedSearchResultsResponseDto {
  results: SearchResponseDto[];
  totalItems: number;

  constructor(results: SearchResponseDto[], totalItems: number) {
    this.results = results;
    this.totalItems = totalItems;
  }
}