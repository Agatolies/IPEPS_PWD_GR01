import {Injectable} from "@angular/core";
import {ApiService} from "@shared/service";
import {BehaviorSubject, Observable} from "rxjs";
import {Contact, ContactCreatePayload, ContactDto, ContactSearchPayload} from "../model";
import {Page} from "@shared/module/data-list/model";
import {CommonHelperUtils} from "@shared/helper";
import {ApiResponse, ApiUriEnum, AppRouteEnum, MenuActionType} from "@shared/model";
import {tap} from "rxjs/operators";
import {ContactHelper} from "../helper/contact.helper";

@Injectable({
  providedIn: 'root'
})

export class ContactService extends ApiService{
  //List de API
  list$: BehaviorSubject<Contact[]> = new BehaviorSubject<Contact[]>([]);
  pagination$: BehaviorSubject<Page> = new BehaviorSubject<Page>(CommonHelperUtils.defaultPagination());
  currentAction$: BehaviorSubject<MenuActionType> = new BehaviorSubject<MenuActionType>(MenuActionType.LIST);


  /*public getList(id:string): Observable<ApiResponse>{
    return this.get(`${AppRouteEnum.CONTACT_LIST}${id}`);
  }*/

  public getList(deleted: boolean = true, search: ContactSearchPayload= {}): void {
    this.post(deleted ? ApiUriEnum.CONTACT_LIST : ApiUriEnum.CONTACT_LIST, search, false).pipe(tap((response: ApiResponse) => {
      console.log(response)
      if (response.result) {
        this.list$.next((response.data!.content as ContactDto[]).map((dto: ContactDto) => ContactHelper.fromDto(dto)))
        this.pagination$.next(CommonHelperUtils.paginationFromList(response.data!));
      } else {
        this.list$.next([]);
      }
    })).subscribe();
  }

  public getDetail(id: string): Observable<ApiResponse> {
    return this.get(`${AppRouteEnum.CONTACT_DETAIL}${id}`);
  }

  public create(payload: ContactCreatePayload): Observable<ApiResponse> {
    return this.post(AppRouteEnum.CONTACT_CREATE, payload);
  }

  public update(payload: ContactCreatePayload): Observable<ApiResponse> {
    return this.put(AppRouteEnum.CONTACT_UPDATE, payload);
  }

  public softdelete(id: string): Observable<ApiResponse> {
    return this.put(`${AppRouteEnum.CONTACT_SOFTDELETE}${id}`, {});
  }

  public rollbackdelete(id: string): Observable<ApiResponse> {
    return this.put(`${AppRouteEnum.CONTACT_ROLLBACK}${id}`, {});
  }

  public erase(id: string): Observable<ApiResponse> {
    return this.delete(`${AppRouteEnum.CONTACT_ERASE}${id}`);
  }
}
