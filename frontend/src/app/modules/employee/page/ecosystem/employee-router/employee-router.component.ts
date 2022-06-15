import {Component, OnInit} from '@angular/core';
import {DestroyableComponent} from "@shared/component";
import {BehaviorSubject} from "rxjs";
import {MenuAction} from "@dashboard/model/interface";

import {NavigationService} from "@shared/service";
import {MenuHelperUtils} from "@shared/helper";
import {AppRouteEnum, MenuActionType} from "@shared/model";
import {EmployeeService} from "@employee/service/employee.service";

@Component({
  selector: 'app-employee-router',
  templateUrl: './employee-router.component.html',
  styleUrls: ['./employee-router.component.scss']
})
export class EmployeeRouterComponent extends DestroyableComponent implements OnInit {
  actions$: BehaviorSubject<MenuAction[]> = new BehaviorSubject<any>([]);

  constructor(public employeeService: EmployeeService, public navigationService: NavigationService) {
    super();
  }

  ngOnInit(): void {
  }

  setAction(currentAction: MenuActionType): void {
    let actions:MenuAction[] = [];
    switch (currentAction) {
      case MenuActionType.ADD:
        actions = [{
          icon: MenuHelperUtils.ADD_ICON,
          title: 'screen.employee.create.btn',
          link: AppRouteEnum.EMPLOYEE_CREATE
        }]
        break;
      case MenuActionType.UPDATE:
        actions = [{
          icon: MenuHelperUtils.EDIT_ICON,
          title: 'screen.employee.update.btn',
          link: AppRouteEnum.EMPLOYEE_UPDATE
        }]
        break;
      case MenuActionType.DETAIL:
        actions = [{
          icon: MenuHelperUtils.HISTORY_ICON,
          title: 'screen.employee.detail.btn',
          link: AppRouteEnum.EMPLOYEE_DETAIL
        }]
        break;
      case MenuActionType.DELETE:
        actions = [{
          icon: MenuHelperUtils.BACK_ICON,
          title: 'screen.employee.home.btn',
          link: AppRouteEnum.EMPLOYEE_DELETE
        }]
        break ;
    }
    this.actions$.next(actions);
  }

  onActionClick(action :MenuAction): void {
    this.navigationService.setMenuAction(action);
  }
}
