import { LabelWithParam } from '@shared/model/label-with-param.interface';
import { AppRouteEnum } from '@shared/module/menu/model';

export interface MenuAction {
  icon?: string;
  title: string;
  link?: AppRouteEnum;
  type?: MenuActionType;
  confirmMessage?: LabelWithParam;
  titleMessage?: LabelWithParam;
}

export enum MenuActionType {
  ADD = 'ADD',
  LIST = 'LIST',
  UPDATE = 'UPDATE',
  DELETE = 'DELETE',
  SOFTDELETE = 'SOFTDELETE',
  ROLLBACK = 'ROLLBACK',
  ERASE = 'ERASE',
  DETAIL = 'DETAIL',
  DUPLICATE = 'DUPLICATE',
  HELP = 'HELP'
}
