import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {EmployeeCreatePayload, EmployeeSearchPayload, EmployeeUpdatePayload} from '@employee/model/payload';
import {ApiResponse, AppRouteEnum, FormAction} from '@shared/model';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { SelectOption } from '@shared/module/forms/component';
import {EmployeeService} from '@employee/service/employee.service';
import {of, switchMap, tap} from 'rxjs';
import {NavigationService} from '@shared/service';
import {MenuHelperUtils} from '@shared/helper';
import {RankType, RankTypes} from '@employee/model';

@Component({
    selector: 'app-employee-form',
    templateUrl: './employee-form.component.html',
    styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {
    @Input() payload!: EmployeeCreatePayload | EmployeeUpdatePayload | EmployeeSearchPayload;
    @Input() type!: FormAction;
    @Output() dataChange: EventEmitter<EmployeeSearchPayload> = new EventEmitter();
    formGroup!: FormGroup;
    label!: string;
    subdivisionSelectOption: SelectOption[] = [];
    genderSelectOption: SelectOption[] = [];
    modalitySelectOption: SelectOption[] = [];
    termSelectOption: SelectOption[] = [];
    categorySelectOption: SelectOption[] = [];
    rankOptions: SelectOption[] = [];
    formAction = FormAction;

    // end search part

    constructor(public employeeService: EmployeeService, public navigationService: NavigationService) {
    }

    ngOnInit(): void {
        this.setSelectOptions();
        this.label = (this.type === FormAction.ADD) ? 'common.form.btn.create' : 'common.form.btn.update';
        if (this.type === FormAction.SEARCH) {
            this.formGroup = new FormGroup({
                lastname: new FormControl(this.payload.lastname),
                firstname: new FormControl(this.payload.firstname),
                modality: new FormControl(this.payload.modality),
                term: new FormControl(this.payload.term),
                category: new FormControl(this.payload.category),
                subdivision: new FormControl(this.payload.subdivision),
                gender: new FormControl(this.payload.gender),
                matricule: new FormControl(this.payload.matricule),
                rank: new FormControl(this.payload.rank),
            });
            this.formGroup.valueChanges.subscribe(() => this.dataChange.emit(this.formGroup.value));
        } else {
            this.formGroup = new FormGroup({
                lastname: new FormControl(this.payload.lastname, [Validators.required]),
                firstname: new FormControl(this.payload.firstname, [Validators.required]),
                modality: new FormControl(this.payload.modality, [Validators.required]),
                term: new FormControl(this.payload.term, [Validators.required]),
                category: new FormControl(this.payload.category, [Validators.required]),
                subdivision: new FormControl(this.payload.subdivision, [Validators.required]),
                gender: new FormControl(this.payload.gender, [Validators.required]),
                matricule: new FormControl(this.payload.matricule, [Validators.required]),
                rank: new FormControl(this.payload.rank, [Validators.required]),
            });
        }
    }

    get(name: string): FormControl {
        return this.formGroup.get(name)! as FormControl;
    }

    cancel(): void {
        this.navigationService.setMenuAction({
            icon: MenuHelperUtils.BACK_ICON,
            title: 'screen.employee.home.btn',
            link:AppRouteEnum.ECO_SYSTEM_EMPLOYEE_HOME
        });
    }

    save(): void {
        if (!this.formGroup.invalid) {
            // of().pipe().subscribe();
            of(this.type).pipe(
                switchMap((type: FormAction) => {
                    if (type === FormAction.ADD) {
                        return this.employeeService.create(this.formGroup.value);
                    }
                    const payload: EmployeeUpdatePayload = this.formGroup.value;
                    payload.employee_id = (this.payload as EmployeeUpdatePayload).employee_id;
                    return this.employeeService.update(payload);
                }),
                tap((response: ApiResponse) => {
                    if (response.result) {
                        this.employeeService.getList(this.payload.deleted,{});

                        this.navigationService.setMenuAction({
                            icon: MenuHelperUtils.BACK_ICON,
                            title: 'screen.employee.home.btn',
                            link:AppRouteEnum.ECO_SYSTEM_EMPLOYEE_HOME
                        });
                    }
                })
            ).subscribe();
        } else {
            Object.keys(this.formGroup.controls).forEach(field => {
                const control = this.formGroup.get(field);
                control?.markAsTouched({onlySelf: true});
            });
        }
    }

    private setSelectOptions(): void {
      this.subdivisionSelectOption = [
        {value: 'subdivision1', label: 'subdivision1', selected: (this.payload.subdivision === 'subdivision1')},
        {value: 'subdivision2', label: 'subdivision2', selected: (this.payload.subdivision === 'subdivision2')},
        {value: 'subdivision3', label: 'subdivision3', selected: (this.payload.subdivision === 'subdivision3')}
      ]
      this.genderSelectOption = [
        {value: 'FEMALE', label: 'Femme', selected: (this.payload.gender === 'FEMALE')},
        {value: 'MALE', label: 'Homme', selected: (this.payload.gender === 'MALE')}
      ]
      this.modalitySelectOption = [
        {value: 'modality1', label: 'modality1', selected: (this.payload.modality === 'modality1')},
        {value: 'modality2', label: 'modality2', selected: (this.payload.modality === 'modality2')},
        {value: 'modality3', label: 'modality3', selected: (this.payload.modality === 'modality3')}
      ]
      this.categorySelectOption = [
        {value: 'category1', label: 'category1', selected: (this.payload.category === 'category1')},
        {value: 'category2', label: 'category2', selected: (this.payload.category === 'category2')},
        {value: 'category3', label: 'category3', selected: (this.payload.category === 'category3')}
      ]
      this.termSelectOption = [
        {value: 0, label: 'Terme #0', selected: (this.payload.term === 0)},
        {value: 1, label: 'Term #1', selected: (this.payload.term === 1)}
      ]

      this.rankOptions = RankTypes.map((rank: RankType) => {
        return {value: rank, label: rank, selected: this.payload.rank === rank}
      })
    }
}
