import { Component, OnInit } from '@angular/core';
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
import { NavigationService } from '@shared/service';
import { isNil } from 'lodash';
import {switchMap, tap} from 'rxjs/operators';
import {ActivatedRoute, Params} from '@angular/router';
import {of} from 'rxjs';
import {FormGroup} from "@angular/forms";
import {ContactHelper} from "../../../helper/contact.helper";
import {Contact, ContactSearchPayload} from "../../../model";
import {ContactService} from "../../../service/contact.service";

@Component({
  selector: 'app-contact-home',
  templateUrl: './contact-home.component.html',
  styleUrls: ['./contact-home.component.scss']
})
export class ContactHomeComponent implements OnInit {
  payload: ContactSearchPayload = ContactHelper.emptySearch();
  listConfig!: DataListConfig;
  search: ContactSearchPayload = {};
  showDialog = false;
  formAction = FormAction
  sortFilter: SortFilter = ContactHelper.defaultSort();
  pageFilter: PageFilter = {pageSize: 10, pageNumber: 0};
  error?: ApiResponse;
  searchFormGroup!: FormGroup;

  constructor(public contactService: ContactService,
              public navigationService: NavigationService,
              public activatedRouter: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.contactService.currentAction$.next(MenuActionType.LIST);
    this.listConfig = {
      label: this.getLabels(),
      fields: this.getFields(),
      translateKey: 'page.contact.form.label.',
      actions: this.getActions()
    }
    this.getList();
  }

  actionHandle(data: { action: MenuActionType, data: Contact }) {
    switch (data.action) {
      case MenuActionType.DUPLICATE:
        this.navigationService.navigate(`${AppRouteEnum.CONTACT_UPDATE}/${FormAction.ADD}/${data.data.id}`);
        break;
      case MenuActionType.UPDATE:
        this.navigationService.navigate(`${AppRouteEnum.CONTACT_UPDATE}/${FormAction.UPDATE}/${data.data.id}`);
        break;
      case MenuActionType.SOFTDELETE:
        this.contactService.currentAction$.next(MenuActionType.LIST);
        this.activatedRouter.params.pipe(
          switchMap((param: Params) => {
            if (data.data.id) {
              return this.contactService.softdelete(data.data.id)
            }
            return of({result: false, data: null, code: 'page.contact.home.softdelete.error.not-found', success: false});
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
        this.navigationService.navigate(`${AppRouteEnum.CONTACT_DETAIL}/${data.data.id}`);
        break;
    }
  }

  // Filter part -------------------------------------------
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
    this.pageFilter = page;
    this.getDataFromFilter();
  }

  private getDataFromFilter(): void {
    this.payload = {...ContactHelper.emptySearch(), ...this.search}
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
        confirmMessage: {label: 'page.contact.confirm.softdelete.content'},
        titleMessage: {label: 'page.contact.confirm.softdelete.title'}
      },
    ]
  }

  private getLabels(): LabelWithParam[] {
    return [
      {label: 'lastname'},
      {label: 'firstname'},
      {label: 'email'},
      {label: 'phone'},

    ]
  }

  private getFields(): FieldConfig[] {
    return [
      {param: 'lastname', type: DataType.STRING},
      {param: 'firstname', type: DataType.STRING},
      {param: 'email', type: DataType.STRING},
      {param: 'phone', type: DataType.STRING},
    ]
  }
  private getList(): void {
    this.contactService.getList(false,this.search);
  }
}
