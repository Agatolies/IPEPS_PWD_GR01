import {MenuAction} from '@dashboard/model/interface';
import {AppRouteEnum} from "@shared/module/menu/model";


export class MenuHelperUtils {
  public static generateMenu(employeeRole: string): MenuAction[] {
    let menu: MenuAction[] = [];

    if (employeeRole === null || employeeRole === undefined || employeeRole === '') {
      menu.push({icon: 'fas fa-sign-in-alt', title: 'Home',link: AppRouteEnum.SIGNIN})
    }

    switch (employeeRole) {
      default:
        MenuHelperUtils.generateDefaultMenu().forEach(item => menu.push(item));
        break;
    }

    return menu;
  }

  public static generateDefaultMenu(): MenuAction[] {
    return [
      {icon: 'fas fa-sitemap', title: 'menu.organization', link: AppRouteEnum.ORGANIZATION_ROUTER},
      {icon: 'fas fa-user-shield', title: 'menu.account', link: AppRouteEnum.ACCOUNT_ROUTER},
      {icon: 'fas fa-user', title: 'menu.employee', link: AppRouteEnum.EMPLOYEE_ROUTER},
      {icon: 'fas fa-file', title: 'menu.document', link: AppRouteEnum.DOCUMENT_ROUTER},
      {icon: 'fas fa-id-card', title: 'menu.contact', link: AppRouteEnum.CONTACT_SHOW_HOME_PAGE},
      {icon: 'fas fa-wallet', title: 'menu.wallet', link: AppRouteEnum.WALLET_HOME}];
  }
}
