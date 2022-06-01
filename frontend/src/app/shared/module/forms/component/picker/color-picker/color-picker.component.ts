import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR} from '@angular/forms';

//************DOCUMENTATION********************//
// https://zefoy.github.io/ngx-color-picker/   //
//*********************************************//


@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ColorPickerComponent),
      multi: true
    },
    {provide: NG_VALIDATORS, useExisting: forwardRef(() => ColorPickerComponent), multi: true}
  ]
})
export class ColorPickerComponent implements OnInit {

  @Input() label ='';
  @Input() name: string = 'input';
  @Input() placeholder ='';
  @Input() type: string = 'text';
  @Input() required = false;
  @Input() pattern: string ='';
  @Input() readonly: boolean = true;
  private _value ='';
  public editing = false;

  control: any;
  public onChange: any = Function.prototype;
  public onTouched: any = Function.prototype;

  public blue: string = '#0000ff';
  public red: string = '#ff0000';
  public green: string = '#00ff00';

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
