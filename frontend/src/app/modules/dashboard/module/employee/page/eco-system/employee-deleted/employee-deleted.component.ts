import {
  ApiResponse,
  AppRouteEnum,
  FormAction,
  LabelWithParam,
  MenuAction,
  MenuActionType,
  PageFilter
} from '@shared/model';
import {switchMap} from 'rxjs/operators';
import {ActivatedRoute, Params} from '@angular/router';
import {CommonHelperUtils, MenuHelperUtils} from '@shared/helper';
import {Employee, EmployeeSearchPayload} from '@employee/model';
import {EmployeeService} from '@employee/service/employee.service';
import {Component, OnInit} from '@angular/core';
import {NavigationService} from '@shared/service';
import {of, tap} from 'rxjs';
import {EmployeeHelper} from '@employee/helper/employee.helper';
import { DataListConfig, DataType, FieldConfig } from '@shared/module/data-list/component/data-list/data-list.config';

@Component({
  selector: 'app-employee-deleted',
  templateUrl: './employee-deleted.component.html',
  styleUrls: ['./employee-deleted.component.scss']
})
export class EmployeeDeletedComponent implements OnInit {
  payload: EmployeeSearchPayload = EmployeeHelper.emptySearch();
  listConfig!: DataListConfig;
  search: EmployeeSearchPayload = {};
  showDialog = false;
  formAction = FormAction
  pageFilter: PageFilter = {pageSize: 10, pageNumber: 0};
  error?: ApiResponse;

  constructor(public employeeService:EmployeeService,public navigationService:NavigationService, public activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.employeeService.currentAction$.next(MenuActionType.DELETE);
    this.listConfig = {
      label: this.getLabels(),
      fields: this.getFields(),
      translateKey: 'page.employee.form.label.',
      actions:this.getActions()
    }
    this.employeeService.getList(true, {});
  }

  actionHandle(data: { action: MenuActionType, data: Employee }) {
    switch (data.action) {
      case MenuActionType.ERASE:
        this.employeeService.currentAction$.next(MenuActionType.DELETE);
        this.activatedRouter.params.pipe(
          switchMap((param: Params) => {
            if (data.data.id) {
              return this.employeeService.erase(data.data.id)
            }
            return of({result: false, data: null, code: 'page.employee.home.rollback.error.not-found'});
          }), tap((response: ApiResponse) => {
            if (response.result) {
              this.employeeService.getList(true, {})
            } else {
              this.error = response;
            }
          })
        ).subscribe();
        break

      case MenuActionType.DETAIL:
        this.navigationService.navigate(`${AppRouteEnum.ECO_SYSTEM_EMPLOYEE_DETAIL}`);
        break;

      case MenuActionType.ROLLBACK:
        this.employeeService.currentAction$.next(MenuActionType.DELETE);
        this.activatedRouter.params.pipe(
          switchMap((param: Params) => {
            if (data.data.id) {
              return this.employeeService.rollbackdelete(data.data.id)
            }
            return of({result: false, data: null, code: 'page.employee.home.rollback.error.not-found'});
          }),tap((response: ApiResponse) => {
            if (response.result) {
              this.employeeService.getList(true, {})
            } else {
              this.error = response;
            }
          })
        ).subscribe();
        break;
    }
  }

  // Filter part -------------------------------------------
  onFilterChange(data: any): void {
    this.search = data;
    this.getDataFromFilter();
  }

  openDialog(): void {
    this.showDialog = true;
  }

  onFilter(close: boolean): void {
    this.search = {...this.payload};
    this.getDataFromFilter();
    if (close) {
      this.onCloseModal();
    }
  }

  onCloseModal(): void {
    this.showDialog = false;
  }

  navigateToDelete() {
    this.navigationService.navigate(AppRouteEnum.ECO_SYSTEM_EMPLOYEE_DELETED);
  }

  refreshList(page: PageFilter): void {
    console.log('this.pageFilter', this.pageFilter);
    this.pageFilter = page;
    this.getDataFromFilter();
  }

  private getDataFromFilter(): void {
    this.payload = {...EmployeeHelper.emptySearch(), ...this.search}
    CommonHelperUtils.cleanEmptyPropertyOfObject(this.search);
    this.search = {...this.search, page: this.pageFilter}
    this.employeeService.getList(true, this.search);
  }

  // End part filter -------------------------------------------


  private getActions(): MenuAction[] {
    return [
      {icon: MenuHelperUtils.DELETE_ICON, title: 'menu.template', type: MenuActionType.ERASE, confirmMessage:{label:'page.employee.confirm.erase.content'}, titleMessage:{label:'page.employee.confirm.erase.title'}},
      {icon: MenuHelperUtils.BACK_ICON, title: 'menu.template', type: MenuActionType.ROLLBACK, confirmMessage:{label:'page.employee.confirm.rollback.content'}, titleMessage:{label:'page.employee.confirm.rollback.title'}},
    ]
  }

  private getLabels(): LabelWithParam[] {
    return [
      {label: 'lastname'},
      {label: 'firstname'},
      {label: 'modality'},
      {label: 'term'},
      {label: 'category'},
      {label: 'subdivision'},
      {label: 'gender'},
      {label: 'matricule'}
    ]
  }

  private getFields(): FieldConfig[] {
    return [
      {param: 'lastname', type: DataType.STRING},
      {param: 'firstname', type: DataType.STRING},
      {param: 'modality', type: DataType.STRING},
      {param: 'term', type: DataType.STRING},
      {param: 'category', type: DataType.STRING},
      {param: 'subdivision', type: DataType.STRING},
      {param: 'gender', type: DataType.GENDER},
      {param: 'matricule', type: DataType.GENDER}
    ]
  }
  private getList(): void {
    this.employeeService.getList(true);
  }
}
