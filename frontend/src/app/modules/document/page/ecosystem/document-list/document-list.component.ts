import { Component, OnInit, ViewChild } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {DocumentService} from "../../../service/document.service";
import {ApiResponse} from "@shared/model";
import {Document, Documentdto} from "../../../Model";
import {DocumentHelper} from "../../../helper/document.helper";



@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.scss']
})
export class DocumentListComponent implements OnInit {

  public list$ : BehaviorSubject<Document[]> = new BehaviorSubject<Document[]>([]);

  constructor(public documentService : DocumentService) { }

  ngOnInit(): void {
    this.getAllDocument();
  }
  getAllDocument(){
    this.documentService.getList()
      .subscribe((response: ApiResponse) => {
        console.log('affichage liste');
        if (response.result) {
          const documentDto = response.data! as Documentdto[];
          this.list$.next(documentDto.map((v: Documentdto) => DocumentHelper.fromDTO(v)));
        }
      })
  }
}
