import { Component, OnInit } from '@angular/core';
import {DataListConfig} from "@shared/module/data-list/component/data-list/data-list.config";
import {MenuAction} from "@shared/model";
import {MenuHelperUtils} from "@shared/helper";
import {NavigationService} from "@shared/service";

@Component({
  selector: 'app-employee-menu',
  templateUrl: './employee-menu.component.html',
  styleUrls: ['./employee-menu.component.scss']
})
export class EmployeeMenuComponent implements OnInit {
  showMenu = false;
  menu: MenuAction[] = MenuHelperUtils.generateMenu('');

  constructor(public navigationService: NavigationService) {

  }

  ngOnInit(): void {
  }

}
