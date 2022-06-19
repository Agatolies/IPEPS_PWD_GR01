import {Component, OnInit} from '@angular/core';
import {DataListConfig, DataType, FieldConfig} from "@shared/module/data-list/component/data-list/data-list.config";
import {PageFilter} from "@shared/module/data-list/model";
import {ApiResponse, AppRouteEnum, FormAction, LabelWithParam, MenuAction, MenuActionType} from "@shared/model";
import {Contact, ContactSearchPayload} from "../../../model";
import {ContactHelper} from "../../../helper/contact.helper";
import {ContactService} from "../../../service/contact.service";
import {NavigationService} from "@shared/service";
import {switchMap, tap} from "rxjs/operators";
import {ActivatedRoute, Params} from "@angular/router";
import {of} from "rxjs";
import {CommonHelperUtils, MenuHelperUtils} from "@shared/helper";

@Component({
  selector: 'app-contact-delete',
  templateUrl: './contact-delete.component.html',
  styleUrls: ['./contact-delete.component.scss']
})
export class ContactDeleteComponent implements OnInit {
  payload: ContactSearchPayload = ContactHelper.emptySearch();
  listConfig!: DataListConfig;
  search: ContactSearchPayload = {};
  showDialog = false;
  formAction = FormAction
  pageFilter: PageFilter = {pageSize: 10, pageNumber: 0};
  error?: ApiResponse;

  constructor(public contactService: ContactService,
              public navigationService: NavigationService,
              public activatedRouter: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.contactService.currentAction$.next(MenuActionType.DELETE);
    this.listConfig = {
      label: this.getLabels(),
      fields: this.getFields(),
      translateKey: 'page.contact.form.label.',
      actions:this.getActions()
    }
    this.contactService.getList(true, {});
  }

  // Début type menu ---------------------------------
  actionHandle(data: { action: MenuActionType, data: Contact }) {
    switch (data.action) {
      case MenuActionType.ERASE:
        this.contactService.currentAction$.next(MenuActionType.DELETE);
        this.activatedRouter.params.pipe(
          switchMap((param: Params) => {
            if (data.data.id) {
              return this.contactService.erase(data.data.id)
            }
            return of({result: false, data: null, code: 'page.contact.home.rollback.error.not-found', success: false});
          }), tap((response: ApiResponse) => {
            if (response.result) {
              this.contactService.getList(true, {})
            } else {
              this.error = response;
            }
          })
        ).subscribe();
        break;

      case MenuActionType.DETAIL:
        this.navigationService.navigate(`${AppRouteEnum.CONTACT_DETAIL}`);
        break;

      case MenuActionType.ROLLBACK:
        this.contactService.currentAction$.next(MenuActionType.DELETE);
        this.activatedRouter.params.pipe(
          switchMap((param: Params) => {
            if (data.data.id) {
              return this.contactService.rollbackdelete(data.data.id)
            }
            return of({result: false, data: null, code: 'page.contact.home.rollback.error.not-found', success: false});
          }),tap((response: ApiResponse) => {
            if (response.result) {
              this.contactService.getList(true, {})
            } else {
              this.error = response;
            }
          })
        ).subscribe();
        break;
      }
    }
  // Fin type menu ---------------------------------
  // Partie Filtre ---------------------------------
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
    this.navigationService.navigate(AppRouteEnum.CONTACT_DELETE);
  }

  refreshList(page: PageFilter): void {
    console.log('this.pageFilter', this.pageFilter);
    this.pageFilter = page;
    this.getDataFromFilter();
  }

  private getDataFromFilter(): void {
    this.payload = {...ContactHelper.emptySearch(), ...this.search}
    CommonHelperUtils.cleanEmptyPropertyOfObject(this.search);
    this.search = {...this.search, page: this.pageFilter}
    this.contactService.getList(true, this.search);
  }
  // Fin Partie Filtre -----------------------------------
  // Debut Get -------------------------------------------

  private getActions(): MenuAction[] {
    return [
      {icon: MenuHelperUtils.DELETE_ICON, title: 'menu.template', type: MenuActionType.ERASE,
        confirmMessage:{label:'page.contact.confirm.erase.content'}, titleMessage:{label:'page.contact.confirm.erase.title'}},

      {icon: MenuHelperUtils.BACK_ICON, title: 'menu.template', type: MenuActionType.ROLLBACK,
        confirmMessage:{label:'page.contact.confirm.rollback.content'}, titleMessage:{label:'page.contact.confirm.rollback.title'}},
    ]
  }

  private getLabels(): LabelWithParam[] {
    return [
      {label: 'lastname'},
      {label: 'firstname'},
      {label: 'phone'},
      {label: 'email'}
    ]
  }

  private getFields(): FieldConfig[] {
    return [
      {param: 'lastname', type: DataType.STRING},
      {param: 'firstname', type: DataType.STRING},
      {param: 'phone', type: DataType.STRING},
      {param: 'email', type: DataType.STRING}

    ]
  }
  private getList(): void {
    this.contactService.getList(true);
  }
  // Fin Get -------------------------------------------
}
