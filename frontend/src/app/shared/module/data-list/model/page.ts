import { Sort } from '@shared/module/data-list/model/sort';

export interface Pageable {
  sort: Sort;
  offset: number;
  pageSize: number;
  pageNumber: number;
  paged: boolean;
  unpaged: boolean
}

export interface Page {
  last: boolean;
  totalPages: number;
  totalElements: number;
  size: number;
  number: number;
  sort: Sort;
  first: boolean;
  numberOfElements: number;
  empty: boolean
}
export interface PageFilter{
  pageSize:number;
  pageNumber:number;
}
