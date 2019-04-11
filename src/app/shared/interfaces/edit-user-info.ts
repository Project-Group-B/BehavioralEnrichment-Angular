import { DepartmentInfo } from './department-info';

export interface EditUserInfo {
  firstName: string;
  lastName: string;
  userName: string;
  userId: string;
  department: DepartmentInfo;
  allDepartments: DepartmentInfo[];
}
