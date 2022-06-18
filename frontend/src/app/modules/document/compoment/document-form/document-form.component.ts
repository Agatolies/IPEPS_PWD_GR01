import {Component, Input, OnInit} from '@angular/core';
import {DocumentCreatePayload, DocumentUpdatePayload} from "../../Model";
import {ApiResponse, FormAction} from "@shared/model";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {DocumentService} from "../../service/document.service";
import {NavigationService} from "@shared/service";
import {MatDialogRef} from "@angular/material/dialog";

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
              private formBuilder: FormBuilder,
              private dialogRef: MatDialogRef<DocumentFormComponent>) {
  }

  ngOnInit(): void {
    this.label = (this.type === FormAction.ADD) ? 'common.form.btn.create': '';
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
    this.formGroup = this.formBuilder.group({
      documentName: ['',Validators.required],
      documentType: ['',Validators.required],
      documentDescription: ['',Validators.required],
      documentPath: ['',Validators.required],
    })
  }


  save():void {
    console.log(this.formGroup.value);
    if(this.formGroup.valid){
      console.log('mon deuxième payload', this.payload);
      // create(this.formGroup.value)
      this.documentService.create(this.formGroup.value)
        .subscribe((data:ApiResponse)=>{

          this.formGroup.reset();
          this.dialogRef.close('Créer');
                })
    }else{
      const p:DocumentUpdatePayload = {...this.formGroupDoc.value,document_id:this.payload.id}
      //update
      this.documentService.update(p).subscribe((data:ApiResponse)=>{

      })
    }
  }
}
