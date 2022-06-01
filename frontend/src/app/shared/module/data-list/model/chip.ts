import { DataType } from '@shared/module/data-list/component/data-list/data-list.config';

export interface Chip {
  translateKey: string;
  label: string;
  value: any;
  valueType: DataType;
}
