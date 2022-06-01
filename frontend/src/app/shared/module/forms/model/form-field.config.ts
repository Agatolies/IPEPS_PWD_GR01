import { FormControl } from '@angular/forms';

export interface FormFieldConfig {
  type: string;
  formControl: FormControl,
  translateKey: string;
  name: string;
}
