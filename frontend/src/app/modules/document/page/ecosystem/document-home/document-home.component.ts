import { Component, OnInit } from '@angular/core';
import { DocumentService } from '../../../service/document.service';
import { Router } from '@angular/router';
import { Document } from '../../../Model';
import { DocumentCreateComponent } from '../document-create/document-create.component';
import { MatDialog } from '@angular/material/dialog';
import { DocumentUpdateComponent } from '../document-update/document-update.component';
import { DocumentHelper } from '../../../helper/document.helper';
import {DocumentDetailComponent} from "../document-detail/document-detail.component";

@Component({
  selector: 'app-document-home',
  templateUrl: './document-home.component.html',
  styleUrls: ['./document-home.component.scss']
})
export class DocumentHomeComponent implements OnInit {
  constructor(private dialogRef: MatDialog,
              public documentService: DocumentService,
              public router: Router) {
  }

  ngOnInit(): void {
    this.documentService.getList().subscribe();
  }

  create(): void {
    this.dialogRef.open(DocumentCreateComponent, {
      width: '75%', data: {
        payload: DocumentHelper.getCreatePayload()
      }
    });
  }

  update(document: Document): void {
    console.log('document to update', document);
    this.dialogRef.open(DocumentUpdateComponent, {
      width: '75%', data: {
        payload: DocumentHelper.fromDtoUpdatePayload(DocumentHelper.toDto(document))
      }
    });
  }
  detail(document: Document): void {
    console.log('detail of a document', document)
    this.dialogRef.open(DocumentDetailComponent, {
      width: '75%', data: {document}
    })
  }

  delete(document: Document): void {
    this.documentService.remove(document.id).subscribe();
  }

}
