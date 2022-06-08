import {Component, Input, OnInit} from '@angular/core';
import {ContactCreatePayload, ContactSearchPayload, ContactUpdatePayload} from "../../model";
import {ContactService} from "../../service/contact.service";
import {NavigationService} from "@shared/service";

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  @Input() payload!: ContactCreatePayload | ContactUpdatePayload
                    | ContactSearchPayload;
  @Input()


  constructor(public contactService: ContactService, public navigationService: NavigationService) { }

  ngOnInit(): void {
  }

}
