import { DialogTypeEnum } from '@shared/module/dialog/model/enum';


export interface DialogConfigInterface {
  id: string;
  show: boolean;
  top: string;
  left: string;
  width: string;
  height: string;
  zIndex:number;
  isFirstPlan: boolean;
  title?:string;
  type?:DialogTypeEnum;
}
