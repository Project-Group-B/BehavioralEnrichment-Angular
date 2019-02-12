export default interface UserInfo {
  loggedIn: boolean;
  username: string;
  sessionId: string;
  permissions: UserPermissions;
  admin: boolean;
  errorMsg: string;
}

export interface UserPermissions {
  canRead: boolean;
  canEdit: boolean;
  canDelete: boolean;
}
