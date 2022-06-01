import { Component, forwardRef, Input, OnChanges, Provider, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SelectOption } from '@shared/module/forms/component/form-select/select-option';
import { isNil } from 'lodash';

const SELECT_CONTROL_VALUE_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => FormSelectComponent),
  multi: true,
};

@Component({
  selector: 'app-form-select',
  templateUrl: './form-select.component.html',
  styleUrls: ['./form-select.component.scss'],
  providers: [SELECT_CONTROL_VALUE_ACCESSOR]
})
export class FormSelectComponent implements ControlValueAccessor, OnChanges {
  @Input() label!: string;
  @Input() placeholder!: string;
  @Input() options!: SelectOption[];
  @Input() translateKey: string = '';
  @Input() type:string = 'default';
  show = false;
  selected?: any
  isNil = isNil;
  disabled = false;
  private onTouched!: Function;
  private onChanged!: Function;

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges) {
    const selected = this.options?.find(o => o.selected);
    if (selected) {
      this.writeValue(selected);
    }
  }

  selectValue(option: SelectOption) {
    this.show = false;
    this.selected = option;
    this.onChanged(option.value); // <-- call function to let know of a change
  }

  writeValue(option: SelectOption): void {
    this.selected = option ?? undefined;
  }

  registerOnChange(fn: any): void {
    this.onChanged = fn; // <-- save the function
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn; // <-- save the function
  }

  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }
}
