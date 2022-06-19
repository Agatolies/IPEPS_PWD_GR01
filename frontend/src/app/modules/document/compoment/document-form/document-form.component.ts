import { Component, Input, OnInit } from '@angular/core';
import { Document, DocumentCreatePayload, DocumentUpdatePayload } from "../../Model";
import { FormAction } from "@shared/model";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { DocumentService } from "../../service/document.service";
import { NavigationService } from "@shared/service";
import { MatDialogRef } from "@angular/material/dialog";
import { EmployeeService } from '@employee/service/employee.service';
import { OrganizationService } from '@organization/service/organization.service';
import { WalletManagementService } from '../../../wallet/service/wallet-management.service';
import { BehaviorSubject } from 'rxjs';
import { EmployeeDto } from '@employee/model';
import { OrganizationDto } from '@organization/model';
import { TransactionDto } from '../../../wallet/model/dto/transaction.dto';

@Component({
  selector: 'app-document-form',
  templateUrl: './document-form.component.html',
  styleUrls: ['./document-form.component.scss']
})
export class DocumentFormComponent implements OnInit {
  @Input() payload!: DocumentCreatePayload | DocumentUpdatePayload;
  @Input() type!: FormAction;
  employeeList$ = new BehaviorSubject<EmployeeDto[]>([]);
  organizationList$ = new BehaviorSubject<OrganizationDto[]>([]);
  transactionList$ = new BehaviorSubject<TransactionDto[]>([]);
  formGroup!: FormGroup;
  formGroupDoc!: FormGroup;
  label!: string;

  // Injecter employeeService pour récupérer la liste des employés pour créer le dropdown selector
  constructor(public documentService: DocumentService,
              public employeeService: EmployeeService,
              public organizationService: OrganizationService,
              public transactionService: WalletManagementService,
              public navigationService: NavigationService,
              private formBuilder: FormBuilder,
              private dialogRef: MatDialogRef<DocumentFormComponent>) {
  }

  ngOnInit(): void {
    this.label = (this.type === FormAction.ADD) ? 'common.form.btn.create' : '';
    this.init();
  }

  save(): void {
    console.log(this.formGroup.value);
    if (this.formGroup.valid) {
      console.log('mon deuxième payload', this.payload);
      // create(this.formGroup.value)
      this.documentService.create(this.formGroup.value)
        .subscribe((data: Document) => {
          if(data.isEmpty){
            alert('Fatality');
          }else{
            this.formGroup.reset();
            this.dialogRef.close('Créer');
          }
        })
    } else {
      const p: DocumentUpdatePayload = {...this.formGroupDoc.value, document_id: this.payload.id}
      //update
      this.documentService.update(p).subscribe((data: Document) => {

      })
    }
  }

  private init(): void {
    this.initFormDoc();
    this.initForm();
    this.initSelectList();
  }

  private initForm(): void {
    this.formGroup = new FormGroup({
      name: new FormControl(this.payload.name),
      description: new FormControl(this.payload.description),
      path: new FormControl(this.payload.path),
      type: new FormControl(this.payload.type),
      employee: new FormControl(this.payload),
      transaction: new FormControl((this.payload)),
      organization: new FormControl((this.payload))
    });
  }

  private initSelectList(): void {
    this.employeeService.getListOfEmployeeForDropdown().subscribe((data: EmployeeDto[]) => this.employeeList$.next(data));
    this.organizationService.getListOfOrganizationForDropdown().subscribe((data: OrganizationDto[]) => this.organizationList$.next(data));
    this.transactionService.getListOfTransactionForDropdown().subscribe((data: TransactionDto[]) => this.transactionList$.next(data));
  }

  private initFormDoc() {
    this.formGroup = this.formBuilder.group({
      name: ['', Validators.required],
      type: ['', Validators.required],
      description: ['', Validators.required],
      path: ['', Validators.required],
      employee: [],
      transaction: [],
      organization: []
    })
  }
}
