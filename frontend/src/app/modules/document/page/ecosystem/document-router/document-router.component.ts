import {Component, OnInit} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {MenuAction} from "@dashboard/model/interface";
import {DocumentService} from "../../../service/document.service";
import {NavigationService} from "@shared/service";
import {MenuHelperUtils} from "@shared/helper";
import {AppRouteEnum, MenuActionType} from "@shared/model";
import {DestroyableComponent} from "@shared/component";

@Component({
  selector: 'app-document-router',
  templateUrl: './document-router.component.html',
  styleUrls: ['./document-router.component.scss']
})
export class DocumentRouterComponent extends DestroyableComponent implements OnInit {
  actions$: BehaviorSubject<MenuAction[]> = new BehaviorSubject<any>([]);

  constructor(public documentService: DocumentService, public navigationService: NavigationService) {
    super();
  }

  ngOnInit(): void {
  }

  setAction(currentAction: MenuActionType): void {
    let actions:MenuAction[] = [];
    switch (currentAction) {
      case MenuActionType.LIST:
        actions = [{
          icon: MenuHelperUtils.ADD_ICON,
          title: 'screen.document.create.btn',
          link: AppRouteEnum.DOCUMENT_CREATE
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
