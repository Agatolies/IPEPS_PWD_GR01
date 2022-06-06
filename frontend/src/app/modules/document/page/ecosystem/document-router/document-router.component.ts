import { Component, OnInit } from '@angular/core';
import {DestroyableComponent} from "@shared/component";
import {BehaviorSubject} from "rxjs";
import {MenuAction} from "@dashboard/model/interface";
import {DocumentService} from "../../../service/document.service";
import {NavigationService} from "@shared/service";

@Component({
  selector: 'app-document-router',
  templateUrl: './document-router.component.html',
  styleUrls: ['./document-router.component.scss']
})
export class DocumentRouterComponent extends DestroyableComponent implements OnInit {
  actions$: BehaviorSubject<MenuAction[]> = new BehaviorSubject<any>([]);

  constructor(public documentService: DocumentService, public navigationService: NavigationService) {
    super();
  }

  ngOnInit(): void {
  }

}
