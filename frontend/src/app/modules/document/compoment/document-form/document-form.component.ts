import {Component, Input, OnInit} from '@angular/core';
import {DocumentCreatePayload, DocumentUpdatePayload} from "../../Model";
import {FormAction} from "@shared/model";
import {FormControl, FormGroup} from "@angular/forms";
import {DocumentService} from "../../service/document.service";
import {NavigationService} from "@shared/service";

@Component({
  selector: 'app-document-form',
  templateUrl: './document-form.component.html',
  styleUrls: ['./document-form.component.scss']
})
export class DocumentFormComponent implements OnInit {
  @Input() payload!: DocumentCreatePayload |DocumentUpdatePayload;
  @Input() type!: FormAction;

  formGroup!: FormGroup;
  label!: string;

  constructor(public documentService: DocumentService, public navigationService: NavigationService) {
  }

  ngOnInit(): void {
        this.label = (this.type === FormAction.ADD) ? 'common.form.btn.create' : 'common.form.btn.update';
    this.formGroup = new FormGroup({
      name: new FormControl(this.payload.name),
      description: new FormControl(this.payload.description),
      path: new FormControl(this.payload.path),
      type: new FormControl(this.payload.type)
    });
  }

}
