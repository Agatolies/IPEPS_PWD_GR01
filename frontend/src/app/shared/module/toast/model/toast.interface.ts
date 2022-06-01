import { ToastType } from '@shared/module/toast/model/enum';

export interface Toast{
  type: ToastType;
  title?: string;
  body: string;
  delay?: number;
}
