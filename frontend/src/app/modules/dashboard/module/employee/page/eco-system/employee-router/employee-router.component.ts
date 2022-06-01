import { Component, OnInit } from '@angular/core';
import { AppRouteEnum, BreadCrumbItem, Entity, MenuAction, MenuActionType } from '@shared/model';
import { EmployeeService } from '@employee/service/employee.service';
import { DestroyableComponent } from '@shared/component';
import { BehaviorSubject, takeUntil, tap } from 'rxjs';
import { NavigationService } from '@shared/service';
import { MenuHelperUtils } from '@shared/helper';

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
    this.employeeService.currentAction$.pipe(takeUntil(this.destroyer$),
      tap((currentAction: MenuActionType) => this.navigationService.setBreadCrumb(Entity.EMPLOYEE, currentAction))).subscribe((currentAction: MenuActionType) => this.setAction(currentAction));

  }

  setAction(currentAction: MenuActionType): void {
    let actions:MenuAction[] = [];
    switch (currentAction) {
      case MenuActionType.LIST:
        actions = [{
          icon: MenuHelperUtils.HELP_ICON,
          title: 'screen.generator-template.help.btn',
          link: AppRouteEnum.HELP_EMPLOYEE
        },
          {
            icon: MenuHelperUtils.ADD_ICON,
            title: 'screen.employee.create.btn',
            link: AppRouteEnum.ECO_SYSTEM_EMPLOYEE_CREATE
          }]
        break;
      case MenuActionType.DELETE:
        actions = [{
          icon: MenuHelperUtils.HELP_ICON,
          title: 'screen.employee.help.btn',
          link: AppRouteEnum.HELP_EMPLOYEE
        },
          {
            icon: MenuHelperUtils.BACK_ICON,
            title: 'screen.employee.home.btn',
            link: AppRouteEnum.ECO_SYSTEM_EMPLOYEE_HOME
          }]
        break;
    }
    this.actions$.next(actions);
  }

  onActionClick(action: MenuAction): void {
    this.navigationService.setMenuAction(action);

  }
}
