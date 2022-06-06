import { Component, forwardRef, OnChanges, Provider } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors } from '@angular/forms';
import { isNil } from 'lodash';

const SWITCH_CONTROL_VALUE_ACCESSOR: Provider = [{
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SwitchComponent),
  multi: true,
},
  {provide: NG_VALIDATORS, useExisting: forwardRef(() => SwitchComponent), multi: true}
]

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss'],
  providers: SWITCH_CONTROL_VALUE_ACCESSOR
})
export class SwitchComponent implements ControlValueAccessor {
  private _value = '';

  control: any;
  public onChange: any = Function.prototype;
  public onTouched: any = Function.prototype;

  constructor() {}

  ngOnInit() {}

  get value(): any {
    return this._value;
  }

  set value(v: any) {
    console.log(v)
    if (v !== this._value) {
      this._value = v;
      this.onChange(v);
    }
  }

  // ControlValueAccessor interface impl
  writeValue(value: any) {
    if (value !== undefined) {
      this._value = value;
    }
  }

  // ControlValueAccessor interface impl
  public registerOnChange(fn: (_: any) => {}): void {
    this.onChange = fn;
  }

  // ControlValueAccessor interface impl
  public registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }

  public validate(c: FormControl) {
    if (!this.control)
      this.control = c;
    return null;
  }

  public getError(errors: ValidationErrors | null): string[] {
    return (isNil(errors)) ? [] : Object.keys(errors);
  }

  toggle() {
    this.value = !this.value;
    this.writeValue(this.value);
    this.onChange(this.value);
  }
}
