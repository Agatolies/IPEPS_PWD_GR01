import {Component, Input, OnInit} from '@angular/core';
import {DocumentCreatePayload, DocumentUpdatePayload} from "../../Model";
import {ApiResponse, FormAction} from "@shared/model";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
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
  formGroupDoc!: FormGroup;
  label!: string;

  constructor(public documentService: DocumentService,
              public navigationService: NavigationService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.label = (this.type === FormAction.ADD) ? 'common.form.btn.create' : 'common.form.btn.update';
    this.initFormDoc();
    this.formGroup = new FormGroup({
      name: new FormControl(this.payload.name),
      description: new FormControl(this.payload.description),
      path: new FormControl(this.payload.path),
      type: new FormControl(this.payload.type),
      employee: new FormControl(this.payload.employee)
    });
  }
initFormDoc(){
    this.formGroupDoc = this.formBuilder.group({
      name: '',
      description: '',
      path: '',
      type:'',
      employee: '',
    });
}

  save():void {
    console.log(this.formGroupDoc.value);
    if(this.type === FormAction.ADD){
      console.log('mon deuxième payload', this.payload);
      // create(this.foormGroup.value)
      this.documentService.create(this.formGroupDoc.value).subscribe((data:ApiResponse)=>{

      })
    }else{
      const p:DocumentUpdatePayload = {...this.formGroupDoc.value,document_id:this.payload.id}
      //update
      this.documentService.update(p).subscribe((data:ApiResponse)=>{

      })
    }
  }
}
