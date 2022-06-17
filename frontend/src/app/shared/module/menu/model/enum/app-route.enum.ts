export enum AppRouteEnum {

  SIGNIN = '/account/signin',
  SIGNUP = '/account/signup',
  FORGOT = '/account/forgot',
  CYCLE_HOME = '/dashboard/cycle/home',
  SECURE_ROOT = '/dashboard',
  ECOSYSTEM_HOME = '/dashboard/ecosystem',



  CONTACT_SHOW_HOME_PAGE = 'contact/home',
  WALLET_SHOW_HOME_PAGE = 'wallet/home',

  //Organization
  ORGANIZATION_SHOW_HOME_PAGE = 'organization/home',
  ORGANIZATION_CREATE = 'organization/page/ecosystem/organization-create',
  ORGANIZATION_UPDATE = 'organization/page/ecosystem/organization-update',
  ORGANIZATION_DETAIL = 'organization/page/ecosystem/organization-detail',
  ORGANIZATION_DELETE = 'organization/page/ecosystem/organization-delete',
  ORGANIZATION_ROUTER = 'dashboard/organization',
  ORGANIZATION_HOME = 'organization/page/ecosystem/organization-home',

  //Employee
  EMPLOYEE_SHOW_HOME_PAGE = 'employee/home',
  EMPLOYEE_CREATE = 'employee/page/ecosystem/employee-create',
  EMPLOYEE_UPDATE = 'employee/page/ecosystem/employee-update',
  EMPLOYEE_DETAIL = 'employee/page/ecosystem/employee-detail',
  EMPLOYEE_DELETE = 'employee/page/ecosystem/employee-delete',
  EMPLOYEE_ROUTER = 'dashboard/employee',
  EMPLOYEE_HOME = 'employee/page/ecosystem/employee-home',

  //Account
  ACCOUNT_SHOW_HOME_PAGE = 'my-account/home',
  ACCOUNT_CREATE = 'account/page/ecosystem/account-create',
  ACCOUNT_UPDATE = 'account/page/ecosystem/account-update',
  ACCOUNT_DETAIL = 'account/page/ecosystem/account-detail',
  ACCOUNT_DELETE = 'account/page/ecosystem/account-delete',
  ACCOUNT_ROUTER = 'dashboard/account',
  ACCOUNT_HOME = 'account/page/ecosystem/account-home',

  //Planning
  ECO_SYSTEM_PLANNING_HOME = 'dashboard/ecosystem/planning/home',
  ECO_SYSTEM_PLANNING_DASHBOARD = 'dashboard/ecosystem/planning/dashboard',
  ECO_SYSTEM_PLANNING_CREATE = 'dashboard/ecosystem/planning/create',
  ECO_SYSTEM_PLANNING_UPDATE = 'dashboard/ecosystem/planning/update',
  ECO_SYSTEM_PLANNING_DETAIL = 'dashboard/ecosystem/planning/detail',
  ECO_SYSTEM_PLANNING_DELETED = 'dashboard/ecosystem/planning/deleted',

  //document
  DOCUMENT_SHOW_HOME_PAGE = 'document/home',
  DOCUMENT_LIST = 'document/page/ecosystem/document-list',
  DOCUMENT_CREATE = 'document/page/ecosystem/document-create',
  DOCUMENT_UPDATE = 'document/page/ecosystem/document-update',
  DOCUMENT_DETAIL = 'document/page/ecosystem/document-detail',
  DOCUMENT_DELETE = 'document/page/ecosystem/document-delete',
  DOCUMENT_ROUTER = 'dashboard/document',
  DOCUMENT_HOME = 'document/page/ecosystem/document-home',

  //Prestation type
  PRESTATION_TYPE_HOME = 'dashboard/prestation-type',
  ECO_SYSTEM_PRESTATION_TYPE_HOME = 'dashboard/ecosystem/prestation-type/data/home',
  ECO_SYSTEM_PRESTATION_TYPE_CREATE = 'dashboard/ecosystem/prestation-type/data/create',
  ECO_SYSTEM_PRESTATION_TYPE_UPDATE = 'dashboard/ecosystem/prestation-type/data/update',
  ECO_SYSTEM_PRESTATION_TYPE_DETAIL = 'dashboard/ecosystem/prestation-type/data/detail',
  ECO_SYSTEM_PRESTATION_TYPE_DELETED = 'dashboard/ecosystem/prestation-type/data/deleted',

  //Prestation
  ECO_SYSTEM_PRESTATION_HOME = 'dashboard/ecosystem/prestation/home',
  ECO_SYSTEM_PRESTATION_CREATE = 'dashboard/ecosystem/prestation/create',
  ECO_SYSTEM_PRESTATION_UPDATE = 'dashboard/ecosystem/prestation/update',
  ECO_SYSTEM_PRESTATION_DETAIL = 'dashboard/ecosystem/prestation/detail',
  ECO_SYSTEM_PRESTATION_DELETED = 'dashboard/ecosystem/prestation/deleted',

  //Generator template
  ECO_SYSTEM_TEMPLATE_HOME = 'dashboard/ecosystem/template/home',
  ECO_SYSTEM_TEMPLATE_CREATE = 'dashboard/ecosystem/template/create',
  ECO_SYSTEM_TEMPLATE_UPDATE = 'dashboard/ecosystem/template/update',
  ECO_SYSTEM_TEMPLATE_DETAIL = 'dashboard/ecosystem/template/detail',
  ECO_SYSTEM_TEMPLATE_DELETED = 'dashboard/ecosystem/template/deleted',

  //Employee
  ECO_SYSTEM_EMPLOYEE_HOME = 'dashboard/ecosystem/employee/home',
  ECO_SYSTEM_EMPLOYEE_CREATE = 'dashboard/ecosystem/employee/create',
  ECO_SYSTEM_EMPLOYEE_UPDATE = 'dashboard/ecosystem/employee/update',
  ECO_SYSTEM_EMPLOYEE_DETAIL = 'dashboard/ecosystem/employee/detail',
  ECO_SYSTEM_EMPLOYEE_DELETED = 'dashboard/ecosystem/employee/deleted',

  //Team
  ECO_SYSTEM_TEAM_HOME = 'dashboard/ecosystem/team/home',
  ECO_SYSTEM_TEAM_CREATE = 'dashboard/ecosystem/team/create',
  ECO_SYSTEM_TEAM_UPDATE = 'dashboard/ecosystem/team/update',
  ECO_SYSTEM_TEAM_DETAIL = 'dashboard/ecosystem/team/detail',
  ECO_SYSTEM_TEAM_DELETED = 'dashboard/ecosystem/team/deleted',

  //Role
  ECO_SYSTEM_ROLE_HOME = 'dashboard/ecosystem/role/home',
  ECO_SYSTEM_ROLE_CREATE = 'dashboard/ecosystem/role/create',
  ECO_SYSTEM_ROLE_UPDATE = 'dashboard/ecosystem/role/update',
  ECO_SYSTEM_ROLE_DETAIL = 'dashboard/ecosystem/role/detail',
  ECO_SYSTEM_ROLE_DELETED = 'dashboard/ecosystem/role/deleted',

  //Address
  ECO_SYSTEM_ADDRESS_HOME = 'dashboard/ecosystem/address/home',
  ECO_SYSTEM_ADDRESS_CREATE = 'dashboard/ecosystem/address/create',
  ECO_SYSTEM_ADDRESS_UPDATE = 'dashboard/ecosystem/address/update',
  ECO_SYSTEM_ADDRESS_DETAIL = 'dashboard/ecosystem/address/detail',
  ECO_SYSTEM_ADDRESS_DELETED= 'dashboard/ecosystem/address/deleted',

  //Wallet
  WALLET_HOME = 'dashboard/ecosystem/wallet/home',
  WALLET_CREATE = 'dashboard/ecosystem/wallet/create',
  WALLET_UPDATE = 'dashboard/ecosystem/wallet/update',
  WALLET_DETAIL= 'dashboard/ecosystem/wallet/detail',
  WALLET_DELETE = 'dashboard/ecosystem/wallet/delete',
  WALLET_ROUTER = 'dashboard/wallet',

  //Remember
  ECO_SYSTEM_REMEMBER_HOME = 'dashboard/ecosystem/remember/home',
  ECO_SYSTEM_REMEMBER_CREATE = 'dashboard/ecosystem/remember/create',
  ECO_SYSTEM_REMEMBER_UPDATE = 'dashboard/ecosystem/remember/update',
  ECO_SYSTEM_REMEMBER_DETAIL = 'dashboard/ecosystem/remember/detail',
  ECO_SYSTEM_REMEMBER_DELETED = 'dashboard/ecosystem/remember/deleted',

  //Parameter
  ECO_SYSTEM_PARAMETER_HOME = 'dashboard/ecosystem/param/home',
  ECO_SYSTEM_PARAMETER_CREATE = 'dashboard/ecosystem/param/create',
  ECO_SYSTEM_PARAMETER_UPDATE = 'dashboard/ecosystem/param/update',
  ECO_SYSTEM_PARAMETER_DETAIL = 'dashboard/ecosystem/param/detail',
  ECO_SYSTEM_PARAMETER_DELETED = 'dashboard/ecosystem/param/deleted',

  //Control
  ECO_SYSTEM_CONTROL_HOME = 'dashboard/ecosystem/control/home',
  ECO_SYSTEM_CONTROL_CREATE = 'dashboard/ecosystem/control/create',
  ECO_SYSTEM_CONTROL_UPDATE = 'dashboard/ecosystem/control/update',
  ECO_SYSTEM_CONTROL_DETAIL = 'dashboard/ecosystem/control/detail',
  ECO_SYSTEM_CONTROL_DELETED = 'dashboard/ecosystem/control/deleted',

  // History
  ECO_SYSTEM_HISTORY_HOME = 'dashboard/ecosystem/history/home',
  ECO_SYSTEM_HISTORY_CREATE = 'dashboard/ecosystem/history/create',
  ECO_SYSTEM_HISTORY_UPDATE = 'dashboard/ecosystem/history/update',
  ECO_SYSTEM_HISTORY_DETAIL = 'dashboard/ecosystem/history/detail',
  ECO_SYSTEM_HISTORY_DELETED = 'dashboard/ecosystem/history/deleted',

  // History
  ECO_SYSTEM_PERMISSION_HOME = 'dashboard/ecosystem/permission/home',
  ECO_SYSTEM_PERMISSION_CREATE = 'dashboard/ecosystem/permission/create',
  ECO_SYSTEM_PERMISSION_UPDATE = 'dashboard/ecosystem/permission/update',
  ECO_SYSTEM_PERMISSION_DETAIL = 'dashboard/ecosystem/permission/detail',
  ECO_SYSTEM_PERMISSION_DELETED = 'dashboard/ecosystem/permission/deleted',

  // Help
  HELP_PLANNING = 'dashboard/help/planning',
  HELP_PRESTATION_TYPE = 'dashboard/help/prestationType',
  HELP_PRESTATION = 'dashboard/help/prestation',
  HELP_TEMPLATE = 'dashboard/help/template',
  HELP_EMPLOYEE = 'dashboard/help/employee',
  HELP_TEAM = 'dashboard/help/team',
  HELP_ROLE = 'dashboard/help/role',
  HELP_ADDRESS = 'dashboard/help/address',
  HELP_REMEMBER = 'dashboard/help/remember',
  HELP_PARAMETER = 'dashboard/help/parameter',
  HELP_CONTROL = 'dashboard/help/control',
  HELP_HISTORY = 'dashboard/help/history',
  HELP_PERMISSION = 'dashboard/help/permission'

}

