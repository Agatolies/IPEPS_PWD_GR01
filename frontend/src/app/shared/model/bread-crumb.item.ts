import { AppRouteEnum } from '@shared/module/menu/model';


export interface BreadCrumbItem{
  label:string;
  icon?:string;
  link:AppRouteEnum;
}
