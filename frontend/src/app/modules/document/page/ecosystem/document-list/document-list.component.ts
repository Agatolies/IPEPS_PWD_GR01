import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DocumentService } from "../../../service/document.service";


@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DocumentListComponent implements OnInit {
  constructor(public documentService: DocumentService) {
  }

  ngOnInit(): void {
    this.documentService.getList().subscribe();
  }
}
