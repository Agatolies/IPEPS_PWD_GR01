import { Component, OnInit } from '@angular/core';
import {ContactService} from "../../../service/contact.service";
import {BehaviorSubject} from "rxjs";
import {AppRouteEnum, Entity, MenuAction, MenuActionType} from "@shared/model";
import {takeUntil, tap} from "rxjs/operators";
import {DestroyableComponent} from "@shared/component";
import {MenuHelperUtils} from "@shared/helper";
import {NavigationService} from "@shared/service";


@Component({
  selector: 'app-contact-routeur',
  templateUrl: './contact-routeur.component.html',
  styleUrls: ['./contact-routeur.component.scss']
})
export class ContactRouteurComponent extends DestroyableComponent implements OnInit {
  actions$: BehaviorSubject<MenuAction[]> = new BehaviorSubject<any>([]);
  cheminLogo: any ='../assets/images/logo200x125.png';

  constructor(public contactService: ContactService,
              public navigationService: NavigationService) {
    super();
  }

  ngOnInit(): void {
    this.contactService.currentAction$.pipe(takeUntil(this.destroyer$),
      tap((currentAction: MenuActionType) =>
        this.navigationService.setBreadCrumb(Entity.CONTACT, currentAction))).subscribe((currentAction: MenuActionType) => this.setAction(currentAction));

  }

  setAction(currentAction: MenuActionType): void {
    let actions:MenuAction[] = [];
    switch (currentAction) {
      case MenuActionType.LIST:
        actions = [{
          icon: MenuHelperUtils.HELP_ICON,
          title: 'screen.generator-template.help.btn',
          link: AppRouteEnum.HELP_CONTACT,
        }]
        break;
      case MenuActionType.ADD:
        actions = [{
            icon: MenuHelperUtils.ADD_ICON,
            title: 'screen.contact.create.btn',
            link: AppRouteEnum.ECO_SYSTEM_CONTACT_CREATE,
          }]
        break;
      case MenuActionType.UPDATE:
        actions = [{
          icon: MenuHelperUtils.EDIT_ICON,
          title: 'screen.document.update.btn',
          link: AppRouteEnum.ECO_SYSTEM_CONTACT_UPDATE,
        }]
        break;
      case MenuActionType.DETAIL:
        actions = [{
          icon: MenuHelperUtils.HISTORY_ICON,
          title: 'screen.document.detail.btn',
          link: AppRouteEnum.ECO_SYSTEM_CONTACT_DETAIL,
        }]
        break;
      case MenuActionType.DELETE:
        actions = [{
          icon: MenuHelperUtils.HELP_ICON,
          title: 'screen.contact.help.btn',
          link: AppRouteEnum.HELP_CONTACT,
        },
          {
            icon: MenuHelperUtils.BACK_ICON,
            title: 'screen.contact.home.btn',
            link: AppRouteEnum.ECO_SYSTEM_CONTACT_HOME,
          }]
        break;
    }
    this.actions$.next(actions);
  }

  onActionClick(action: MenuAction): void {
    this.navigationService.setMenuAction(action);

  }

}
