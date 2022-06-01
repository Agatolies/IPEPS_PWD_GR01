import { Component, OnInit } from '@angular/core';
import { MenuAction } from '@shared/model';
import { MenuHelperUtils } from '@shared/helper';
import { NavigationService } from '@shared/service';
import { AuthService } from '@security/service/auth.service';

@Component({
  selector: 'app-employee-menu',
  templateUrl: './employee-menu.component.html',
  styleUrls: ['./employee-menu.component.scss']
})
export class EmployeeMenuComponent implements OnInit {

  showMenu = false;
  menu: MenuAction[] = MenuHelperUtils.generateMenu('');

  constructor(public navigationService: NavigationService, public authService: AuthService) {
  }

  ngOnInit(): void {
  }

  navigate(item: MenuAction): void {
    this.showMenu = false;
    this.navigationService.setMenuAction(item);
  }

  showProfile(): void {

  }

  logout(): void {
    this.authService.logout();
  }
}
