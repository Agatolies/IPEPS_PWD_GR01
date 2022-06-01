import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '@employee/service/employee.service';
import { DataListConfig, DataType, FieldConfig } from '@shared/module/data-list/component/data-list/data-list.config';
import {
  ApiResponse,
  AppRouteEnum,
  FormAction,
  LabelWithParam,
  MenuAction,
  MenuActionType,
  PageFilter,
  SortFilter
} from '@shared/model';
import { CommonHelperUtils, MenuHelperUtils } from '@shared/helper';
import { Employee } from '@employee/model/business/employee';
import { NavigationService } from '@shared/service';
import { EmployeeSearchPayload } from '@employee/model';
import { EmployeeHelper } from '@employee/helper/employee.helper';
import { isNil } from 'lodash';
import {switchMap} from 'rxjs/operators';
import {ActivatedRoute, Params} from '@angular/router';
import {of, tap} from 'rxjs';

@Component({
  selector: 'app-employee-home',
  templateUrl: './employee-home.component.html',
  styleUrls: ['./employee-home.component.scss']
})
export class EmployeeHomeComponent implements OnInit {
  payload: EmployeeSearchPayload = EmployeeHelper.emptySearch();
  listConfig!: DataListConfig;
  search: EmployeeSearchPayload = {};
  showDialog = false;
  formAction = FormAction
  pageFilter: PageFilter = {pageSize: 10, pageNumber: 0};
  sortFilter: SortFilter = EmployeeHelper.defaultSort(); // here you need to set default filter as same as in backend (see EmployeeFilter line 88
  error?: ApiResponse;

  constructor(public employeeService: EmployeeService, public navigationService: NavigationService, public activatedRouter: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.employeeService.currentAction$.next(MenuActionType.LIST);
    this.listConfig = {
      label: this.getLabels(),
      fields: this.getFields(),
      translateKey: 'page.employee.form.label.',
      actions: this.getActions()
    }
    this.getList();
  }

  actionHandle(data: { action: MenuActionType, data: Employee }) {
    switch (data.action) {
      case MenuActionType.DUPLICATE:
        this.navigationService.navigate(`${AppRouteEnum.ECO_SYSTEM_EMPLOYEE_UPDATE}/${FormAction.ADD}/${data.data.id}`);
        break;
      case MenuActionType.UPDATE:
        this.navigationService.navigate(`${AppRouteEnum.ECO_SYSTEM_EMPLOYEE_UPDATE}/${FormAction.UPDATE}/${data.data.id}`);
        break;
      case MenuActionType.SOFTDELETE:
        this.employeeService.currentAction$.next(MenuActionType.LIST);
        this.activatedRouter.params.pipe(
          switchMap((param: Params) => {
            if (data.data.id) {
              return this.employeeService.softdelete(data.data.id)
            }
            return of({result: false, data: null, code: 'page.employee.home.softdelete.error.not-found'});
          }), tap((response: ApiResponse) => {
            if (response.result) {
              this.getList()
            } else {
              this.error = response;
            }
          })
        ).subscribe();
        break;
      case MenuActionType.DETAIL:
        this.navigationService.navigate(`${AppRouteEnum.ECO_SYSTEM_EMPLOYEE_DETAIL}/${data.data.id}`);
        break;
    }
  }

  // Filter part -------------------------------------------
  onFilterChange(data: any): void {
    console.log('here iam ', this.sortFilter);
    this.search = data;
    this.getDataFromFilter();
  }

  onSortChange(data: SortFilter | null) {
    if (isNil(data)) {
      this.sortFilter = EmployeeHelper.defaultSort();
    } else {
      this.sortFilter = data;
    }
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
    this.pageFilter = page;
    this.getDataFromFilter();
  }

  private getDataFromFilter(): void {
    this.payload = {...EmployeeHelper.emptySearch(), ...this.search}
    CommonHelperUtils.cleanEmptyPropertyOfObject(this.search);
    delete this.search['term'];
    this.search = {...this.search, page: this.pageFilter, sort: this.sortFilter}
    this.getList();
  }

  // End part filter -------------------------------------------
  private getActions(): MenuAction[] {
    return [
      {icon: MenuHelperUtils.DUPLICATE_ICON, title: 'menu.duplicate', type: MenuActionType.DUPLICATE},
      {icon: MenuHelperUtils.EDIT_ICON, title: 'menu.update', type: MenuActionType.UPDATE},
      {
        icon: MenuHelperUtils.DELETE_ICON,
        title: 'menu.delete',
        type: MenuActionType.SOFTDELETE,
        confirmMessage: {label: 'page.employee.confirm.softdelete.content'},
        titleMessage: {label: 'page.employee.confirm.softdelete.title'}
      },
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
    this.employeeService.getList(false,this.search);
  }
}
