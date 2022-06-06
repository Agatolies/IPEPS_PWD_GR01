import {AppUriEnum} from '@shared/model/enum/app-uri.enum';
import {AppRouteEnum} from "@shared/module/menu/model";

export interface MenuAction {
  icon: string;
  title: string;
  link: AppRouteEnum
}
