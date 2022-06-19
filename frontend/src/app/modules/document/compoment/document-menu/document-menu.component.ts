import { Component, OnInit } from '@angular/core';
import {MenuAction} from "@shared/model";
import {MenuHelperUtils} from "@shared/helper";
import {NavigationService} from "@shared/service";
import {MatDialog} from "@angular/material/dialog";
import {
  DocumentCreateComponent, DocumentDeleteComponent,
  DocumentDetailComponent,
  DocumentListComponent,
  DocumentUpdateComponent
} from "../../page";

@Component({
  selector: 'app-document-menu',
  templateUrl: './document-menu.component.html',
  styleUrls: ['./document-menu.component.scss']
})
export class DocumentMenuComponent implements OnInit {
  showMenu = false;
  menu: MenuAction[] = MenuHelperUtils.generateMenu('');


  constructor(private openDocumentCreate: MatDialog,
              private openDocumentDetail: MatDialog,
              private openDocumentUpdate: MatDialog,
              private openDocumentList: MatDialog,
              private openDocumentDelete: MatDialog,
              navigationService: NavigationService) {
  }
  //ouverture des boîtes de dialogue du menu
    openCreate() {
      this.openDocumentCreate.open(DocumentCreateComponent, {
        width: '75%'
      });
    }
    openDetail() {
      this.openDocumentDetail.open(DocumentDetailComponent, {
        width: '75%'
      });
    }
    openUpdate(){
      this.openDocumentUpdate.open(DocumentUpdateComponent, {
        width: '75%'
      });
    }
    openList(){
    this.openDocumentList.open(DocumentListComponent, {
      width: '75%'
    });
    }
  openDelete(){
    this.openDocumentDelete.open(DocumentDeleteComponent, {
      width: '75%'
    });
  }


  ngOnInit(): void {
  }

}
