import { MenuAction } from '@shared/model';
import { AppRouteEnum } from './app-route.enum';

export class MENU_ACTION {
  public static ACCOUNT_SIGNIN: MenuAction = {
    title: 'page.sign-in.title', link: AppRouteEnum.SIGNIN
  }
  public static ACCOUNT_SIGNUP: MenuAction = {
    title: 'page.sign-up.title', link: AppRouteEnum.SIGNUP
  }
  public static ACCOUNT_FORGOT: MenuAction = {
    title: 'page.forgot.title', link: AppRouteEnum.FORGOT
  }
  public static SECURE_CYCLE_HOME: MenuAction = {
    title: 'page.cycle.title', link: AppRouteEnum.CYCLE_HOME
  }
  public static SECURE_CONTROL_HOME: MenuAction = {
    title: 'page.forgot.title', link: AppRouteEnum.ECO_SYSTEM_CONTROL_HOME
  }

  public static ALL: MenuAction[] = [MENU_ACTION.ACCOUNT_SIGNUP, MENU_ACTION.ACCOUNT_SIGNIN, MENU_ACTION.ACCOUNT_FORGOT, MENU_ACTION.SECURE_CYCLE_HOME, MENU_ACTION.SECURE_CONTROL_HOME];

}
