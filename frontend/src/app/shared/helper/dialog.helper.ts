import { DialogConfigInterface } from '@shared/model';

export class DialogHelper {
  public static getHideDialogConfig(index: string, width: string = '600px', height: string = '400px'): DialogConfigInterface {
    return {
      id: index,
      show: false,
      width,
      height,
      top: '0px',
      left: '0px',
      zIndex: 0,
      isFirstPlan: false
    }
  }
}
