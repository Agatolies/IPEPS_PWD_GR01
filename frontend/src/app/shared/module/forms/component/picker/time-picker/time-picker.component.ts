import {AfterViewInit, Component, forwardRef, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, Validator} from '@angular/forms';

//*******************DOCUMENTATION***********************//
// https://www.npmjs.com/package/ngx-material-timepicker //
// https://agranom.github.io/ngx-material-timepicker/    //
//*******************************************************//

@Component({
  selector: 'app-time-picker',
  templateUrl: './time-picker.component.html',
  styleUrls: ['./time-picker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TimePickerComponent),
      multi: true
    },
    {provide: NG_VALIDATORS, useExisting: forwardRef(() => TimePickerComponent), multi: true}
  ]
})
export class TimePickerComponent implements OnInit, AfterViewInit, ControlValueAccessor, Validator {

  @Input() label ='';
  @Input() name: string = 'input';
  @Input() placeholder ='';
  @Input() type: string = 'text';
  @Input() required = false;
  @Input() pattern: string ='';
  @Input() readonly: boolean = false;
  private _value ='';
  public editing = false;

  control: any;
  public onChange: any = Function.prototype;
  public onTouched: any = Function.prototype;

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {}

  get value(): any {
    return this._value;
  }

  set value(v: any) {
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
}
