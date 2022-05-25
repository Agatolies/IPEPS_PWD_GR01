import {MenuAction} from '@dashboard/model/interface';
import { AppUriEnum } from '@shared/model';

export class MenuHelperUtils {
  public static generateMenu(employeeRole: string): MenuAction[] {
    let menu: MenuAction[] = [];
    switch (employeeRole) {
      default:
        menu = MenuHelperUtils.generateDefaultMenu();
        break;
    }
    return menu;
  }

  public static generateDefaultMenu(): MenuAction[] {
    return [
      {icon: 'fas fa-sitemap', title: 'menu.organization', link: AppUriEnum.ORGANIZATION_SHOW_HOME_PAGE},
      {icon: 'fas fa-user-shield', title: 'menu.accounts', link: AppUriEnum.ACCOUNT_SHOW_HOME_PAGE},
      {icon: 'fas fa-user', title: 'menu.employee', link: AppUriEnum.EMPLOYEE_SHOW_HOME_PAGE},
      {icon: 'fas fa-file', title: 'menu.document', link: AppUriEnum.DOCUMENT_SHOW_HOME_PAGE},
      {icon: 'fas fa-id-card', title: 'menu.contact', link: AppUriEnum.CONTACT_SHOW_HOME_PAGE},
      {icon: 'fas fa-wallet', title: 'menu.WALLET', link: AppUriEnum.WALLET_SHOW_HOME_PAGE}];
  }
}
