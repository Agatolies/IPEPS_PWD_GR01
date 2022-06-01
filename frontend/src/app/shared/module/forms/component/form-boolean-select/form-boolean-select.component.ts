import { Component, forwardRef, Input, OnChanges, OnInit, Provider, SimpleChanges } from '@angular/core';
import { ControlContainer, ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SelectOption } from '@shared/module/forms/component';

const SELECT_CONTROL_VALUE_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => FormBooleanSelectComponent),
  multi: true,
};

@Component({
  selector: 'app-form-boolean-select',
  templateUrl: './form-boolean-select.component.html',
  styleUrls: ['./form-boolean-select.component.scss'],
  providers: [SELECT_CONTROL_VALUE_ACCESSOR]
})

export class FormBooleanSelectComponent implements ControlValueAccessor, OnInit, OnChanges {
  @Input() label!: string;
  @Input() placeholder!: string;
  @Input() formControlName!: string;
  @Input() formControl!: FormControl;
  @Input() translateKey: string = 'common.';
  options!: SelectOption[];
  disabled = false;
  booleanValue = false;
  public onChange: any = Function.prototype;
  public onTouched: any = Function.prototype;

  constructor(private controlContainer: ControlContainer) {
  }

  // If formControlName is given, then this.controlContainer.control is the parent FormGroup (or FormArray) instance.
  get control(): FormControl {
    return this.formControl || this.controlContainer!.control!.get(this.formControlName);
  }

  ngAfterContentInit(): void {
    if (this.control) {
      this.booleanValue = this.control.value;
      this.setOptions()
    }
  }

  ngOnChanges(changes: SimpleChanges) {
  }

  ngOnInit(): void {
  }

  writeValue(value: any) {
  }

  public registerOnChange(fn: (_: any) => {}): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }

  setChange() {
    this.control.patchValue(this.booleanValue);
    this.setOptions();
  }

  private setOptions(): void {
    this.booleanValue = this.control.value;
    this.options = [
      {value: true, label: 'true', selected: (this.booleanValue)},
      {value: false, label: 'false', selected: (!this.booleanValue)}
    ];
  }
}


