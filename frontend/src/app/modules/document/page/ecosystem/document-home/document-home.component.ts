import { Component, OnInit } from '@angular/core';
import { DocumentService } from '../../../service/document.service';
import { Router } from '@angular/router';
import { Document } from '../../../Model';
import { DocumentCreateComponent } from '../document-create/document-create.component';
import { MatDialog } from '@angular/material/dialog';
import { DocumentUpdateComponent } from '../document-update/document-update.component';

@Component({
  selector: 'app-document-home',
  templateUrl: './document-home.component.html',
  styleUrls: ['./document-home.component.scss']
})
export class DocumentHomeComponent implements OnInit {
  constructor(private openDocumentCreate: MatDialog,
              private openDocumentDetail: MatDialog,
              private openDocumentUpdate: MatDialog,
              public documentService: DocumentService,
              public router: Router) {
  }

  ngOnInit(): void {
    this.documentService.getList().subscribe((data:Document[])=>console.log('data',data));
  }

  create(): void {
    this.openDocumentCreate.open(DocumentCreateComponent, {
      width: '75%'
    });
  }

  update(document: Document): void {
    this.openDocumentUpdate.open(DocumentUpdateComponent, {
      width: '75%'
    });

  }

  delete(document: Document): void {
    this.documentService.remove(document.id).subscribe();
  }

}
