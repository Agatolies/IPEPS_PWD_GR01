import { Injectable } from "@angular/core";
import { ApiService, HttpService } from "@shared/service";
import { BehaviorSubject, Observable } from "rxjs";
import { Document, DocumentCreatePayload, Documentdto, DocumentUpdatePayload } from "../Model";
import { ApiResponse, ApiUriEnum } from "@shared/model";
import { map, tap } from 'rxjs/operators';
import { DocumentHelper } from '../helper/document.helper';

@Injectable({
  providedIn: 'root'
})
export class DocumentService extends ApiService {
  list$: BehaviorSubject<Document[]> = new BehaviorSubject<Document[]>([]);

  constructor(public http: HttpService) {
    super(http);
  }

  public create(payload: DocumentCreatePayload): Observable<Document> {
    return this.post(ApiUriEnum.DOCUMENT_CREATE, payload)
      .pipe(map((response: ApiResponse) => (response.result) ? DocumentHelper.fromDTO(response.data) : DocumentHelper.getEmpty()),
        tap((document: Document) => {
          if (!document.isEmpty) {
            this.getList().subscribe();
          }
        }));
  }

  public update(payload: DocumentUpdatePayload): Observable<Document> {
    return this.put(ApiUriEnum.DOCUMENT_UPDATE, payload).pipe(map((response: ApiResponse) => (response.result) ? DocumentHelper.fromDTO(response.data) : DocumentHelper.getEmpty()));
  }

  public getDetail(id: string): Observable<Document> {
    return this.get(`${ApiUriEnum.DOCUMENT_DETAIL}/${id}`).pipe(map((response: ApiResponse) => (response.result) ? DocumentHelper.fromDTO(response.data) : DocumentHelper.getEmpty()));
  }

  public remove(id: string): Observable<boolean> {
    return this.delete(`${ApiUriEnum.DOCUMENT_DELETE}/${id}`, true)
      .pipe(map((response: ApiResponse) => response.result),
        tap((deleted: boolean) => {
          if (deleted) {
            this.getList().subscribe();
          }
        }));
  }

  public getList(): Observable<Document[]> {
    return this.get(`${ApiUriEnum.DOCUMENT_LIST}`).pipe(
      map((response: ApiResponse) => (response.result) ? (response.data as Documentdto[]).map((dto: Documentdto) => DocumentHelper.fromDTO(dto)) : []),
      tap((list: Document[]) => {
        this.list$.next(list)
      }));
  }

}
