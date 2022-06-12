import {Component, OnInit} from '@angular/core';
import {DestroyableComponent} from "@shared/component";
import {BehaviorSubject} from "rxjs";
import {MenuAction} from "@dashboard/model/interface";

import {NavigationService} from "@shared/service";
import {MenuHelperUtils} from "@shared/helper";
import {AppRouteEnum, MenuActionType} from "@shared/model";
import {AccountService} from "@account/service/account.service";

@Component({
  selector: 'app-account-router',
  templateUrl: './account-router.component.html',
  styleUrls: ['./account-router.component.scss']
})
export class AccountRouterComponent extends DestroyableComponent implements OnInit {
  actions$: BehaviorSubject<MenuAction[]> = new BehaviorSubject<any>([]);

  constructor(public accountService: AccountService, public navigationService: NavigationService) {
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
          title: 'screen.account.create.btn',
          link: AppRouteEnum.ACCOUNT_CREATE
        }]
        break;
      case MenuActionType.UPDATE:
        actions = [{
          icon: MenuHelperUtils.EDIT_ICON,
          title: 'screen.account.update.btn',
          link: AppRouteEnum.ACCOUNT_UPDATE
        }]
        break;
      case MenuActionType.DETAIL:
        actions = [{
          icon: MenuHelperUtils.HISTORY_ICON,
          title: 'screen.account.detail.btn',
          link: AppRouteEnum.ACCOUNT_DETAIL
        }]
        break;
      case MenuActionType.DELETE:
        actions = [{
          icon: MenuHelperUtils.BACK_ICON,
          title: 'screen.account.home.btn',
          link: AppRouteEnum.ACCOUNT_DELETE
        }]
        break ;
    }
    this.actions$.next(actions);
  }

  onActionClick(action :MenuAction): void {
    this.navigationService.setMenuAction(action);
  }
}
