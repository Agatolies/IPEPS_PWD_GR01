import {MenuAction} from '@dashboard/model/interface';
import { AppUriEnum } from '@shared/model/enum/app-uri.enum';
import {AppRouteEnum} from "@shared/module/menu/model";


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
      {icon: 'fas fa-sitemap', title: 'menu.organization', link: AppRouteEnum.ORGANIZATION_SHOW_HOME_PAGE},
      {icon: 'fas fa-user-shield', title: 'menu.accounts', link: AppRouteEnum.ACCOUNT_SHOW_HOME_PAGE},
      {icon: 'fas fa-user', title: 'menu.employee', link: AppRouteEnum.EMPLOYEE_SHOW_HOME_PAGE},
      {icon: 'fas fa-file', title: 'menu.document', link: AppRouteEnum.DOCUMENT_ROUTER},
      {icon: 'fas fa-id-card', title: 'menu.contact', link: AppRouteEnum.CONTACT_SHOW_HOME_PAGE},
      {icon: 'fas fa-wallet', title: 'menu.WALLET', link: AppRouteEnum.WALLET_SHOW_HOME_PAGE}];
  }
}
