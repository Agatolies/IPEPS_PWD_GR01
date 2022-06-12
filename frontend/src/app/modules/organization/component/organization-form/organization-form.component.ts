import {Component, Input, OnInit} from '@angular/core';
import {OrganizationUpdatePayload, OrganizationCreatePayload} from "@organization/model/payload";
import {FormAction} from "@shared/model";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {OrganizationService} from "../../service/organization.service";
import {NavigationService} from "@shared/service";


@Component({
  selector: 'app-organization-form',
  templateUrl: './organization-form.component.html',
  styleUrls: ['./organization-form.component.scss']
})
export class OrganizationFormComponent implements OnInit {
  @Input() payload!: OrganizationCreatePayload |OrganizationUpdatePayload;
  @Input() type!: FormAction;

  formGroup!: FormGroup;
  formGroupOrg!: FormGroup;
  label!: string;

  constructor(public organizationService: OrganizationService, public navigationService: NavigationService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.label = (this.type === FormAction.ADD) ? 'common.form.btn.create' : 'common.form.btn.update';
    this.initFormOrg();
    this.formGroup = new FormGroup({
      name: new FormControl(this.payload.name),
      description: new FormControl(this.payload.description),
      actif : new FormControl(this.payload.actif)
    });
  }
  initFormOrg(){
    this.formGroupOrg = this.formBuilder.group({
      name: '',
      description: '',
      actif: false
    });
  }
}
