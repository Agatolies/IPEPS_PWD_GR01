import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ContactCreatePayload, ContactSearchPayload, ContactUpdatePayload} from "../../model";
import {ContactService} from "../../service/contact.service";
import {NavigationService} from "@shared/service";
import {FormAction, AppRouteEnum, ApiResponse} from '@shared/model';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { MenuHelperUtils } from '@shared/helper';
import {of} from "rxjs";
import {switchMap, tap} from "rxjs/operators";

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  @Input() payload!: ContactCreatePayload | ContactUpdatePayload | ContactSearchPayload;
  @Input() type!: FormAction;
  @Output() dataChange: EventEmitter<ContactSearchPayload> = new EventEmitter();

  formGroup!: FormGroup;
  label!: string;
  formAction = FormAction;

  constructor(public contactService: ContactService, public navigationService: NavigationService) {
  }

  // FormControl = Classe qui peut contenir valeurs / informations éléments du formulaire
  // FormGroup = Collection de contrôle de formulaire - accepte les valeurs des FormControl en un objet
  ngOnInit(): void {
    this.label = (this.type === FormAction.ADD) ?
      'common.form.btn.create' : 'common.form.btn.update';
    if (this.type === FormAction.SEARCH) {
      this.formGroup = new FormGroup({
        lastname: new FormControl(this.payload.lastname),
        firstname: new FormControl(this.payload.firstname),
        email: new FormControl(this.payload.email),
        phone: new FormControl(this.payload.phone),
        address: new FormControl(this.payload.address)
      });
      //Subcribe : méthode pour connecter à l'observable
      this.formGroup.valueChanges.subscribe(() => this.dataChange.emit(this.formGroup.value));
    } else {
      this.formGroup = new FormGroup({
        // Validators = Valider que le champ n'est pas vide
        lastname: new FormControl(this.payload.lastname, [Validators.required]),
        firstname: new FormControl(this.payload.firstname, [Validators.required]),
        email: new FormControl(this.payload.email, [Validators.required]),
        phone: new FormControl(this.payload.phone, [Validators.required]),
        address: new FormControl(this.payload.address,[Validators.required])
      });
    }
  }

  get(name: string): FormControl {
    return this.formGroup.get(name)! as FormControl;
  }

  cancel(): void {
    this.navigationService.setMenuAction({
      icon: MenuHelperUtils.BACK_ICON,
      title: 'screen.contact.home.btn',
      link: AppRouteEnum.CONTACT_HOME
    });
  }
  //pipe = prend les données et transforme en un type voulu
  //switchMap = retourner un observable
  save(): void {
    if (!this.formGroup.invalid) {
        of(this.type).pipe(
          switchMap((type: FormAction) => {
            if (type === FormAction.ADD) {
              return this.contactService.create(this.formGroup.value);
            }
            const payload: ContactUpdatePayload = this.formGroup.value;
            payload.contact_id = (this.payload as ContactUpdatePayload).contact_id;
            return this.contactService.update(payload);
          }),
          tap((response: ApiResponse) => {
            if (response.result) {
              this.contactService.getList(this.payload.deleted,{});

              this.navigationService.setMenuAction({
                icon: MenuHelperUtils.BACK_ICON,
                title: 'screen.contact.home.btn',
                link:AppRouteEnum.CONTACT_HOME
              });
            }
          })
          //Subcribe : méthode pour connecter à l'observable
        ).subscribe();
    } else {
      Object.keys(this.formGroup.controls).forEach(field => {
        const control = this.formGroup.get(field);
        control?.markAsTouched({onlySelf: true});
      });
    }
  }
}


