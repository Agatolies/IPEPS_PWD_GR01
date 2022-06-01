import { AppRouteEnum, MenuAction, MenuActionType } from '@shared/model';

export class MenuHelperUtils {
  public static generateMenu(employeeRole: string = ''): MenuAction[] {
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
      {icon: MenuHelperUtils.PRESTATION_TYPE_ICON, title: 'menu.prestation-type', link: AppRouteEnum.PRESTATION_TYPE_HOME},
      {icon: MenuHelperUtils.ECO_SYSTEM_ICON, title: 'menu.eco-system', link: AppRouteEnum.ECOSYSTEM_HOME},
    /*  {icon: MenuHelperUtils.PLANNING_ICON, title: 'menu.planning', link:AppRouteEnum.ECO_SYSTEM_PLANNING_HOME},
      {icon: MenuHelperUtils.TEMPLATE_ICON, title: 'menu.template', link: AppRouteEnum.TEMPLATE_HOME},
      {icon: MenuHelperUtils.CONTROL_ICON, title: 'menu.control', link: AppRouteEnum.CONTROL_HOME},
      {icon: MenuHelperUtils.PRESTATION_ICON, title: 'menu.prestation', link: AppRouteEnum.PRESTATION_HOME},
      {icon: MenuHelperUtils.EMPLOYEE_ICON, title: 'menu.employee', link:AppRouteEnum.ECO_SYSTEM_EMPLOYEE_HOME},
      {icon: MenuHelperUtils.TEAM_ICON, title: 'menu.team', link: AppRouteEnum.TEAM_HOME},
      {icon: MenuHelperUtils.ROLE_ICON, title: 'menu.role', link: AppRouteEnum.ROLE_HOME},
      {icon: MenuHelperUtils.REMEMBER_ICON, title: 'menu.remember', link: AppRouteEnum.REMEMBER_HOME},
      {icon: MenuHelperUtils.PARAMETER_ICON, title: 'menu.parameter', link: AppRouteEnum.PARAMETER_HOME},
      {icon: MenuHelperUtils.HISTORY_ICON, title: 'menu.history', link: AppRouteEnum.HISTORY_HOME},
      {icon: MenuHelperUtils.ADDRESS_ICON, title: 'menu.address', link: AppRouteEnum.ADDRESS_HOME},
      {icon: MenuHelperUtils.PERMISSION_ICON, title: 'menu.permission', link: AppRouteEnum.ECO_SYSTEM_PERMISSION_HOME}*/];
  }

  public static generateDataListStandardAction():MenuAction[]{
    return[
      {icon: MenuHelperUtils.EDIT_ICON, title: 'menu.planning', type: MenuActionType.UPDATE},
      {icon: MenuHelperUtils.DELETE_ICON, title: 'menu.template', type: MenuActionType.DELETE,},
    ]
  }
  // list of icon
  public static ECO_SYSTEM_ICON: string = 'fa-regular fa-database';
  public static ADD_ICON: string = 'fa-regular fa-plus';
  public static BACK_ICON: string = 'fa-regular fa-rotate-left';
  public static EDIT_ICON: string = 'fa-regular fa-pencil-alt';
  public static DELETE_ICON: string = 'fa-regular fa-trash';
  public static DELETED_LIST_ICON: string = 'fa-solid fa-trash-can';
  public static PLANNING_ICON: string = 'fa-regular fa-calendar';
  public static TEMPLATE_ICON: string = 'fa-regular fa-chart-tree-map';
  public static CONTROL_ICON: string = 'fa-regular fa-shield-check';
  public static PRESTATION_TYPE_ICON: string = 'fa-regular fa-diagram-cells';
  public static PRESTATION_ICON: string = 'fa-regular fa-presentation-screen';
  public static EMPLOYEE_ICON: string = 'fa-regular fa-user';
  public static TEAM_ICON: string = 'fa-regular fa-users';
  public static ROLE_ICON: string = 'fa-regular fa-key-skeleton-left-right';
  public static REMEMBER_ICON: string = 'fa-regular fa-alarm-clock';
  public static PARAMETER_ICON: string = 'fa-regular fa-gears';
  public static HISTORY_ICON: string = 'fa-regular fa-rectangle-vertical-history';
  public static ADDRESS_ICON: string = 'fa-regular fa-map';
  public static DUPLICATE_ICON:string = 'fa-regular fa-clone';
  public static HELP_ICON:string = 'fa-regular fa-question';
  public static PERMISSION_ICON:string = 'fa-regular fa-lock-a';
}
