import {Component, OnInit} from '@angular/core';
import {DestroyableComponent} from "@shared/component";
import {BehaviorSubject} from "rxjs";
import {MenuAction} from "@dashboard/model/interface";

import {NavigationService} from "@shared/service";
import {MenuHelperUtils} from "@shared/helper";
import {AppRouteEnum, MenuActionType} from "@shared/model";
import {OrganizationService} from "@organization/service/organization.service";

@Component({
  selector: 'app-organization-router',
  templateUrl: './organization-router.component.html',
  styleUrls: ['./organization-router.component.scss']
})
export class OrganizationRouterComponent extends DestroyableComponent implements OnInit {
  actions$: BehaviorSubject<MenuAction[]> = new BehaviorSubject<any>([]);

  constructor(public organizationService: OrganizationService, public navigationService: NavigationService) {
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
          title: 'screen.organization.create.btn',
          link: AppRouteEnum.ORGANIZATION_CREATE
        }]
        break;
      case MenuActionType.UPDATE:
        actions = [{
          icon: MenuHelperUtils.EDIT_ICON,
          title: 'screen.organization.update.btn',
          link: AppRouteEnum.ORGANIZATION_UPDATE
        }]
        break;
      case MenuActionType.DETAIL:
        actions = [{
          icon: MenuHelperUtils.HISTORY_ICON,
          title: 'screen.organization.detail.btn',
          link: AppRouteEnum.ORGANIZATION_DETAIL
        }]
        break;
      case MenuActionType.DELETE:
        actions = [{
          icon: MenuHelperUtils.BACK_ICON,
          title: 'screen.organization.home.btn',
          link: AppRouteEnum.ORGANIZATION_DELETE
        }]
        break ;
    }
    this.actions$.next(actions);
  }

  onActionClick(action :MenuAction): void {
    this.navigationService.setMenuAction(action);
  }
}
