import {Component, OnInit} from '@angular/core';
import {DestroyableComponent} from "@shared/component";
import {BehaviorSubject} from "rxjs";
import {MenuAction} from "@dashboard/model/interface";
import {DocumentService} from "../../../service/document.service";
import {NavigationService} from "@shared/service";
import {MenuHelperUtils} from "@shared/helper";
import {AppRouteEnum, MenuActionType} from "@shared/model";

@Component({
  selector: 'app-document-router',
  templateUrl: './document-router.component.html',
  styleUrls: ['./document-router.component.scss']
})
export class DocumentRouterComponent extends DestroyableComponent implements OnInit {
  actions$: BehaviorSubject<MenuAction[]> = new BehaviorSubject<any>([]);
cheminLogo:any ='../assets/images/logo200x125.png';
  constructor(public documentService: DocumentService, public navigationService: NavigationService) {
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
          title: 'screen.document.create.btn',
          link: AppRouteEnum.DOCUMENT_CREATE
        }]
        break;
      case MenuActionType.UPDATE:
        actions = [{
          icon: MenuHelperUtils.EDIT_ICON,
          title: 'screen.document.update.btn',
          link: AppRouteEnum.DOCUMENT_DELETE
        }]
        break;
      case MenuActionType.DETAIL:
        actions = [{
          icon: MenuHelperUtils.HISTORY_ICON,
          title: 'screen.document.detail.btn',
          link: AppRouteEnum.DOCUMENT_DETAIL
        }]
        break;
      case MenuActionType.DELETE:
        actions = [{
          icon: MenuHelperUtils.BACK_ICON,
          title: 'screen.document.home.btn',
          link: AppRouteEnum.DOCUMENT_DELETE
        }]
        break ;
    }
    this.actions$.next(actions);
  }

  onActionClick(action :MenuAction): void {
    this.navigationService.setMenuAction(action);
  }

}
