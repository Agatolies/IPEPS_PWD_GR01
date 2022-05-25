import {Component, OnInit} from '@angular/core';
import {AuthService} from '@security/service/auth.service';
import {ApiResponse} from '@shared/model';
import {Credential, CredentialDto} from '@security/model';
import {CredentialHelper} from '@security/helper';
import {Router} from '@angular/router';
import {MenuAction} from '@dashboard/model/interface';
import {MenuHelperUtils} from '@dashboard/utils';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  credential?: Credential;
  menu: MenuAction[] = [];
  showLongMenu = false;
  showLanguageMenu = false;

  constructor(public auth: AuthService, public translateService: TranslateService, public router: Router) {
  }

  ngOnInit(): void {
    this.menu = MenuHelperUtils.generateMenu(this.auth.profileRole);
  }

  me(): void {
    this.auth.me().subscribe((response: ApiResponse) => {
      this.credential = CredentialHelper.credentialFromDto(response.data as CredentialDto);
      console.log('this.credential', this.credential);
    })
  }

  logout(): void {
    this.auth.logout();
  }

  setLanguage(language: string): void {
    this.translateService.use(language);
  }

  onClickOutSideMenuLanguage(): void {
    if (this.showLanguageMenu) {
      this.showLanguageMenu = false;
    }
  }

  navigate(item: MenuAction): void {
    this.router.navigate([item.link]).then();
  }
}
