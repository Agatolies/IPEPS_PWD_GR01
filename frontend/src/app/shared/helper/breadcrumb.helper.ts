import { AppRouteEnum, BreadCrumbItem, Entity, MenuActionType } from '@shared/model';
import { MenuHelperUtils } from '@shared/helper/menu-helper.utils';

export class BreadcrumbHelper {
  public static getBreads(entity: Entity, currentAction: MenuActionType): BreadCrumbItem[] {
    switch (entity) {
      case Entity.TEMPLATE:
        return BreadcrumbHelper.getTemplateBreadCrumbs(currentAction);
      case Entity.CONTROL:
        return BreadcrumbHelper.getControlBreadCrumbs(currentAction);
      case Entity.PRESTATIONTYPE:
        return BreadcrumbHelper.getPrestationTypeBreadCrumbs(currentAction);
      case Entity.PRESTATION:
        return BreadcrumbHelper.getPrestationBreadCrumbs(currentAction);
      case Entity.EMPLOYEE:
        return BreadcrumbHelper.getEmployeeBreadCrumbs(currentAction);
      case Entity.ADDRESS:
        return BreadcrumbHelper.getAddressBreadCrumbs(currentAction);
      case Entity.REMEMBER:
        return BreadcrumbHelper.getRememberBreadCrumbs(currentAction);
      case Entity.PARAMETER:
        return BreadcrumbHelper.getParamBreadCrumbs(currentAction);
      case Entity.HISTORY:
        return BreadcrumbHelper.getHistoryBreadCrumbs(currentAction);
      case Entity.ROLE:
        return BreadcrumbHelper.getRoleBreadCrumbs(currentAction);
      case Entity.TEAM:
        return BreadcrumbHelper.getTeamBreadCrumbs(currentAction);
      default:
        return [];
    }
  }

  public static getTemplateBreadCrumbs(currentAction: MenuActionType): BreadCrumbItem[] {
    let breadCrumbs: BreadCrumbItem[] = [];
    breadCrumbs.push({label: 'menu.template', icon: MenuHelperUtils.TEMPLATE_ICON, link: AppRouteEnum.ECO_SYSTEM_TEMPLATE_HOME});

    switch (currentAction) {
      case MenuActionType.DETAIL:
        breadCrumbs.push({label: 'page.template.detail.title', link: AppRouteEnum.ECO_SYSTEM_TEMPLATE_DETAIL});
        break;
      case MenuActionType.ADD:
        breadCrumbs.push({label: 'page.template.create.title', link: AppRouteEnum.ECO_SYSTEM_TEMPLATE_DETAIL});
        break;
      case MenuActionType.DELETE:
        breadCrumbs.push({label: 'page.template.delete.title', link: AppRouteEnum.ECO_SYSTEM_TEMPLATE_DETAIL});
        break;
      case MenuActionType.UPDATE:
        breadCrumbs.push({label: 'page.template.update.title', link: AppRouteEnum.ECO_SYSTEM_TEMPLATE_DETAIL});
        break;
    }
    return breadCrumbs;
  }

  public static getControlBreadCrumbs(currentAction: MenuActionType): BreadCrumbItem[] {
    let breadCrumbs: BreadCrumbItem[] = [];
    breadCrumbs.push({label: 'menu.control', icon: MenuHelperUtils.CONTROL_ICON, link: AppRouteEnum.ECO_SYSTEM_CONTROL_HOME});

    switch (currentAction) {
      case MenuActionType.DETAIL:
        breadCrumbs.push({label: 'page.control.detail.title', link: AppRouteEnum.ECO_SYSTEM_CONTROL_DETAIL});
        break;
      case MenuActionType.ADD:
        breadCrumbs.push({label: 'page.control.create.title', link: AppRouteEnum.ECO_SYSTEM_CONTROL_DETAIL});
        break;
      case MenuActionType.DELETE:
        breadCrumbs.push({label: 'page.control.delete.title', link: AppRouteEnum.ECO_SYSTEM_CONTROL_DETAIL});
        break;
      case MenuActionType.UPDATE:
        breadCrumbs.push({label: 'page.control.update.title', link: AppRouteEnum.ECO_SYSTEM_CONTROL_DETAIL});
        break;
    }
    return breadCrumbs;
  }

  public static getPrestationTypeBreadCrumbs(currentAction: MenuActionType): BreadCrumbItem[] {
    let breadCrumbs: BreadCrumbItem[] = [];
    breadCrumbs.push({label: 'menu.prestationType', icon: MenuHelperUtils.PRESTATION_TYPE_ICON, link: AppRouteEnum.ECO_SYSTEM_PRESTATION_TYPE_HOME});

    switch (currentAction) {
      case MenuActionType.DETAIL:
        breadCrumbs.push({label: 'page.prestationType.detail.title', link: AppRouteEnum.ECO_SYSTEM_PRESTATION_TYPE_DETAIL});
        break;
      case MenuActionType.ADD:
        breadCrumbs.push({label: 'page.prestationType.create.title', link: AppRouteEnum.ECO_SYSTEM_PRESTATION_TYPE_DETAIL});
        break;
      case MenuActionType.DELETE:
        breadCrumbs.push({label: 'page.prestationType.delete.title', link: AppRouteEnum.ECO_SYSTEM_PRESTATION_TYPE_DETAIL});
        break;
      case MenuActionType.UPDATE:
        breadCrumbs.push({label: 'page.prestationType.update.title', link: AppRouteEnum.ECO_SYSTEM_PRESTATION_TYPE_DETAIL});
        break;
    }
    return breadCrumbs;
  }

  public static getPrestationBreadCrumbs(currentAction: MenuActionType): BreadCrumbItem[] {
    let breadCrumbs: BreadCrumbItem[] = [];
    breadCrumbs.push({label: 'menu.prestation', icon: MenuHelperUtils.PRESTATION_ICON, link: AppRouteEnum.ECO_SYSTEM_PRESTATION_HOME});

    switch (currentAction) {
      case MenuActionType.DETAIL:
        breadCrumbs.push({label: 'page.prestation.detail.title', link: AppRouteEnum.ECO_SYSTEM_PRESTATION_DETAIL});
        break;
      case MenuActionType.ADD:
        breadCrumbs.push({label: 'page.prestation.create.title', link: AppRouteEnum.ECO_SYSTEM_PRESTATION_DETAIL});
        break;
      case MenuActionType.DELETE:
        breadCrumbs.push({label: 'page.prestation.delete.title', link: AppRouteEnum.ECO_SYSTEM_PRESTATION_DETAIL});
        break;
      case MenuActionType.UPDATE:
        breadCrumbs.push({label: 'page.prestation.update.title', link: AppRouteEnum.ECO_SYSTEM_PRESTATION_DETAIL});
        break;
    }
    return breadCrumbs;
  }

  public static getTeamBreadCrumbs(currentAction: MenuActionType): BreadCrumbItem[] {
    let breadCrumbs: BreadCrumbItem[] = [];
    breadCrumbs.push({label: 'menu.team', icon: MenuHelperUtils.TEAM_ICON, link: AppRouteEnum.ECO_SYSTEM_TEAM_HOME});

    switch (currentAction) {
      case MenuActionType.DETAIL:
        breadCrumbs.push({label: 'page.team.detail.title', link: AppRouteEnum.ECO_SYSTEM_TEAM_DETAIL});
        break;
      case MenuActionType.ADD:
        breadCrumbs.push({label: 'page.team.create.title', link: AppRouteEnum.ECO_SYSTEM_TEAM_DETAIL});
        break;
      case MenuActionType.DELETE:
        breadCrumbs.push({label: 'page.team.delete.title', link: AppRouteEnum.ECO_SYSTEM_TEAM_DETAIL});
        break;
      case MenuActionType.UPDATE:
        breadCrumbs.push({label: 'page.team.update.title', link: AppRouteEnum.ECO_SYSTEM_TEAM_DETAIL});
        break;
    }
    return breadCrumbs;
  }

  public static getEmployeeBreadCrumbs(currentAction: MenuActionType): BreadCrumbItem[] {
    let breadCrumbs: BreadCrumbItem[] = [];
    breadCrumbs.push({label: 'menu.employee', icon: MenuHelperUtils.EMPLOYEE_ICON, link: AppRouteEnum.ECO_SYSTEM_EMPLOYEE_HOME});

    switch (currentAction) {
      case MenuActionType.DETAIL:
        breadCrumbs.push({label: 'page.employee.detail.title', link: AppRouteEnum.ECO_SYSTEM_EMPLOYEE_DETAIL});
        break;
      case MenuActionType.ADD:
        breadCrumbs.push({label: 'page.employee.create.title', link: AppRouteEnum.ECO_SYSTEM_EMPLOYEE_DETAIL});
        break;
      case MenuActionType.DELETE:
        breadCrumbs.push({label: 'page.employee.delete.title', link: AppRouteEnum.ECO_SYSTEM_EMPLOYEE_DETAIL});
        break;
      case MenuActionType.UPDATE:
        breadCrumbs.push({label: 'page.employee.update.title', link: AppRouteEnum.ECO_SYSTEM_EMPLOYEE_DETAIL});
        break;

    }
    return breadCrumbs;
  }

  public static getAddressBreadCrumbs(currentAction: MenuActionType): BreadCrumbItem[] {
    let breadCrumbs: BreadCrumbItem[] = [];
    breadCrumbs.push({label: 'menu.address', icon: MenuHelperUtils.ADDRESS_ICON, link: AppRouteEnum.ECO_SYSTEM_ADDRESS_HOME});

    switch (currentAction) {
      case MenuActionType.DETAIL:
        breadCrumbs.push({label: 'page.address.detail.title', link: AppRouteEnum.ECO_SYSTEM_ADDRESS_DETAIL});
        break;
      case MenuActionType.ADD:
        breadCrumbs.push({label: 'page.address.create.title', link: AppRouteEnum.ECO_SYSTEM_ADDRESS_DETAIL});
        break;
      case MenuActionType.DELETE:
        breadCrumbs.push({label: 'page.address.delete.title', link: AppRouteEnum.ECO_SYSTEM_ADDRESS_DETAIL});
        break;
      case MenuActionType.UPDATE:
        breadCrumbs.push({label: 'page.address.update.title', link: AppRouteEnum.ECO_SYSTEM_ADDRESS_DETAIL});
        break;

    }
    return breadCrumbs;
  }
  public static getRememberBreadCrumbs(currentAction: MenuActionType): BreadCrumbItem[] {
    let breadCrumbs: BreadCrumbItem[] = [];
    breadCrumbs.push({label: 'menu.remember', icon: MenuHelperUtils.REMEMBER_ICON, link: AppRouteEnum.ECO_SYSTEM_REMEMBER_HOME});

    switch (currentAction) {
      case MenuActionType.DETAIL:
        breadCrumbs.push({label: 'page.remember.detail.title', link: AppRouteEnum.ECO_SYSTEM_REMEMBER_DETAIL});
        break;
      case MenuActionType.ADD:
        breadCrumbs.push({label: 'page.remember.create.title', link: AppRouteEnum.ECO_SYSTEM_REMEMBER_DETAIL});
        break;
      case MenuActionType.DELETE:
        breadCrumbs.push({label: 'page.remember.delete.title', link: AppRouteEnum.ECO_SYSTEM_REMEMBER_DETAIL});
        break;
      case MenuActionType.UPDATE:
        breadCrumbs.push({label: 'page.remember.update.title', link: AppRouteEnum.ECO_SYSTEM_REMEMBER_DETAIL});
        break;

    }
    return breadCrumbs;
  }
  public static getParamBreadCrumbs(currentAction: MenuActionType): BreadCrumbItem[] {
    let breadCrumbs: BreadCrumbItem[] = [];
    breadCrumbs.push({label: 'menu.parameter', icon: MenuHelperUtils.PARAMETER_ICON, link: AppRouteEnum.ECO_SYSTEM_PARAMETER_HOME});

    switch (currentAction) {
      case MenuActionType.DETAIL:
        breadCrumbs.push({label: 'page.parameter.detail.title', link: AppRouteEnum.ECO_SYSTEM_PARAMETER_DETAIL});
        break;
      case MenuActionType.ADD:
        breadCrumbs.push({label: 'page.parameter.create.title', link: AppRouteEnum.ECO_SYSTEM_PARAMETER_DETAIL});
        break;
      case MenuActionType.DELETE:
        breadCrumbs.push({label: 'page.parameter.delete.title', link: AppRouteEnum.ECO_SYSTEM_PARAMETER_DETAIL});
        break;
      case MenuActionType.UPDATE:
        breadCrumbs.push({label: 'page.parameter.update.title', link: AppRouteEnum.ECO_SYSTEM_PARAMETER_DETAIL});
        break;

    }
    return breadCrumbs;
  }
  public static getHistoryBreadCrumbs(currentAction: MenuActionType): BreadCrumbItem[] {
    let breadCrumbs: BreadCrumbItem[] = [];
    breadCrumbs.push({label: 'menu.history', icon: MenuHelperUtils.HISTORY_ICON, link: AppRouteEnum.ECO_SYSTEM_HISTORY_HOME});

    switch (currentAction) {
      case MenuActionType.DETAIL:
        breadCrumbs.push({label: 'page.history.detail.title', link: AppRouteEnum.ECO_SYSTEM_HISTORY_DETAIL});
        break;
      case MenuActionType.ADD:
        breadCrumbs.push({label: 'page.history.create.title', link: AppRouteEnum.ECO_SYSTEM_HISTORY_DETAIL});
        break;
      case MenuActionType.DELETE:
        breadCrumbs.push({label: 'page.history.delete.title', link: AppRouteEnum.ECO_SYSTEM_HISTORY_DETAIL});
        break;
      case MenuActionType.UPDATE:
        breadCrumbs.push({label: 'page.history.update.title', link: AppRouteEnum.ECO_SYSTEM_HISTORY_DETAIL});
        break;

    }
    return breadCrumbs;
  }
  public static getRoleBreadCrumbs(currentAction: MenuActionType): BreadCrumbItem[] {
    let breadCrumbs: BreadCrumbItem[] = [];
    breadCrumbs.push({label: 'menu.role', icon: MenuHelperUtils.ROLE_ICON, link: AppRouteEnum.ECO_SYSTEM_ROLE_HOME});

    switch (currentAction) {
      case MenuActionType.DETAIL:
        breadCrumbs.push({label: 'page.role.detail.title', link: AppRouteEnum.ECO_SYSTEM_ROLE_DETAIL});
        break;
      case MenuActionType.ADD:
        breadCrumbs.push({label: 'page.role.create.title', link: AppRouteEnum.ECO_SYSTEM_ROLE_DETAIL});
        break;
      case MenuActionType.DELETE:
        breadCrumbs.push({label: 'page.role.delete.title', link: AppRouteEnum.ECO_SYSTEM_ROLE_DETAIL});
        break;
      case MenuActionType.UPDATE:
        breadCrumbs.push({label: 'page.role.update.title', link: AppRouteEnum.ECO_SYSTEM_ROLE_DETAIL});
        break;

    }
    return breadCrumbs;
  }
}
