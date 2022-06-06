import { Component, forwardRef, Input, OnChanges, Provider, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { isNil } from 'lodash';
import { MultiSelectOption } from '@shared/module/forms/component';

const SELECT_CONTROL_VALUE_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => FormMultiSelectComponent),
  multi: true,
};

@Component({
  selector: 'app-form-multi-select',
  templateUrl: './form-multi-select.component.html',
  styleUrls: ['./form-multi-select.component.scss'],
  providers: [SELECT_CONTROL_VALUE_ACCESSOR]
})
export class FormMultiSelectComponent implements ControlValueAccessor, OnChanges {
  @Input() label!: string;
  @Input() placeholder!: string;
  @Input() options!: MultiSelectOption[];
  @Input() translateKey: string = '';
  @Input() type: string = 'default';
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

  selectValue(option: MultiSelectOption) {
    if (this.selected.filter((item: any) => item.prestation_type_id === option.value.id).length > 0) {
      this.selected = this.selected.filter((item: any) => item.prestation_type_id !== option.value.id);
    }
    this.onChanged(this.selected); // <-- call function to let know of a change
  }

  writeValue(option: MultiSelectOption): void {
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
