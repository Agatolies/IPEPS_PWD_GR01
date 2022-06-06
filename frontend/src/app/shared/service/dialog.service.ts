import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DialogConfigInterface } from '@shared/model';
import { DialogHelper } from '@shared/helper/dialog.helper';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  dialogConfigs$: BehaviorSubject<DialogConfigInterface[]> = new BehaviorSubject<DialogConfigInterface[]>([]);

  addDialog(index: string, width?: string, height?: string): void {

    const configs = this.dialogConfigs$.getValue();
    configs.push(DialogHelper.getHideDialogConfig(index, width, height));
    this.dialogConfigs$.next(configs);
  }


  toggleShow(index: string, show: boolean) {
    const configs = this.dialogConfigs$.getValue();
    const find = configs.find((c: DialogConfigInterface) => c.id === index);
    if (find) {
      find.top = `${(window.innerHeight - parseInt(find.height.replace('px', ''))) / 3}px`;
        find.left = `${(window.innerWidth - parseInt(find.width.replace('px', ''))) / 2}px`;
        find.show = show;
      this.dialogConfigs$.next(configs);
    }
  }

  setFirst(id: string) {
    let configs = this.dialogConfigs$.getValue();
    configs = configs.map((c: DialogConfigInterface) => {
      c.zIndex = (c.id === id) ? 1 : 0;
      return c;
    })
    this.dialogConfigs$.next(configs);
  }
}
