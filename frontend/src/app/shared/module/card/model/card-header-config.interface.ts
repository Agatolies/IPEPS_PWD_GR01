import { LabelWithParam } from '@shared/model/label-with-param.interface';
import { MenuAction } from '@shared/model/menu-action';
import { AppRouteEnum } from '@shared/module/menu/model';

export interface CardHeaderConfig {
  title: LabelWithParam,
  icon?: string;
  titleLink?:AppRouteEnum;
  actions?: MenuAction[]
}
