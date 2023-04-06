export interface IUserPermissionsRole {
  id: number;
  value: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  UserRole: {
    id: number;
    roleId: number;
    userId: number;
  };
}
