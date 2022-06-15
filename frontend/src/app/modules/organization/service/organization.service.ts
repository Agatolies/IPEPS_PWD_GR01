import { Injectable } from '@angular/core';
import {ApiService, HttpService} from "@shared/service";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {ApiResponse, ApiUriEnum} from "@shared/model";
import {Organization, OrganizationCreatePayload, OrganizationDto, OrganizationUpdatePayload} from "@organization/model";

@Injectable({
  providedIn: 'root'
})
export class OrganizationService extends ApiService{

  constructor(public http:HttpService) {
    super(http);
  }

  public getList(): Observable<Organization[]> {
    return this.get('person/list').pipe(map((response: ApiResponse) => {
      return (response.result) ?  [] :
        (response.data as OrganizationDto[]).map((transforme: OrganizationDto) => {
          return {
            id: transforme.organization_id,
            name: transforme.name,
            description: transforme.description,
            actif: transforme.actif
          };
        })
    }));
  }

  public getDetail(id : string): Observable<OrganizationDto>{
    return this.get(`${ApiUriEnum.ORGANIZATION_DETAIL}${id}`)
      .pipe(map((response: ApiResponse) => response.data as OrganizationDto));
  }

  public update(payload: OrganizationUpdatePayload): Observable<ApiResponse>{
    return this.put(ApiUriEnum.ORGANIZATION_UPDATE, payload)
  }

  public create(payload: OrganizationCreatePayload): Observable<ApiResponse>{
    return this.post(ApiUriEnum.ORGANIZATION_CREATE, payload)
  }

  public deleted(id : string): Observable<OrganizationDto> {
    return this.delete(`${ApiUriEnum.ORGANIZATION_DELETE}${id}`)
      .pipe(map((response: ApiResponse) => response.data as OrganizationDto));
  }
}
