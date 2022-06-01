export interface Sort {
  sorted: boolean;
  unsorted: boolean;
  empty: boolean;
}

export interface SortFilter {
  sort: SortEnum;
  field: string;
}

export enum SortEnum {
  ASC = 'ASC',
  DESC = 'DESC'
}
