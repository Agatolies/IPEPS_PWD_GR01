import {AfterViewInit, Component, forwardRef, Input, OnInit} from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator
} from '@angular/forms';
import {isNil} from 'lodash';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormInputComponent),
      multi: true
    },
    {provide: NG_VALIDATORS, useExisting: forwardRef(() => FormInputComponent), multi: true}
  ]
})
export class FormInputComponent implements OnInit, AfterViewInit, ControlValueAccessor, Validator {

  /** The control labelText **/
  @Input() label = '';
  @Input() name: string = 'input';
  @Input() placeholder = '';
  @Input() type: string = 'text';
  @Input() required = false;
  @Input() pattern: string = '';
  @Input() readonly: boolean = false;
  private _value = '';
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
    console.log(v);
    console.log(this._value);
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

}
