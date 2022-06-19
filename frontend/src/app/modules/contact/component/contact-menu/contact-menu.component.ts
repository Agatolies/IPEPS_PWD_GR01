import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {
  ContactCreateComponent,
  ContactDeleteComponent,
  ContactDetailComponent,
  ContactUpdateComponent
} from "../../page/ecosystem";


@Component({
  selector: 'app-contact-menu',
  templateUrl: './contact-menu.component.html',
  styleUrls: ['./contact-menu.component.scss']
})
export class ContactMenuComponent implements OnInit {


  constructor(private openContactCreate: MatDialog,
              private openContactDetail: MatDialog,
              private openContactUpdate: MatDialog,
              private openContactDelete: MatDialog,) {
  }

  //ouverture du menu
  openCreate() {
    this.openContactCreate.open(ContactCreateComponent, {
      width: '75%'
    });
  }
  openDetail() {
    this.openContactDetail.open(ContactDetailComponent, {
      width: '75%'
    });
  }
  openUpdate(){
    this.openContactUpdate.open(ContactUpdateComponent, {
      width: '75%'
    });
  }
  openDelete(){
    this.openContactDelete.open(ContactDeleteComponent, {
      width: '75%'
    });
  }

  ngOnInit(): void {
  }

}
