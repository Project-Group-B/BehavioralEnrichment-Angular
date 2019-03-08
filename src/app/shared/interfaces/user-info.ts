export interface UserInfo {
  loggedIn: boolean;
  username: string;
  sessionId: string;
  permissions: UserPermissions;
  admin: boolean;
  errorMsg: string;
  firstName: string;
  lastName: string;
  departmentId: string;
  id: number;
}

interface UserPermissions {
  canRead: boolean;
  canEdit: boolean;
  canDelete: boolean;
}
