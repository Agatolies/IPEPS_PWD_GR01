import { LabelWithParam } from '@shared/model';

export interface ContextMenuConfig {
  data:any;
  items: ContextMenuItem[];
  left: string;
  top: string;
  show: boolean;
  width: string;
}

export interface ContextMenuItem {
  title: LabelWithParam;
  action: ContextMenuAction;
  shortcut?: string;
}

export enum ContextMenuAction {
  ACTION1 = 'ACTION1',
  ACTION2 = 'ACTION2',
  ACTION3 = 'ACTION3',
  ACTION4 = 'ACTION4',
  ACTION5 = 'ACTION5'
}
