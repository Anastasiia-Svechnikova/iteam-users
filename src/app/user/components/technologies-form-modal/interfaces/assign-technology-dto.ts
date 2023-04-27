export interface IAssignTechnologyToUserDTO {
  userId?: string;
  technologyId: string;
}

export interface IAssignTechnologyToProjectDTO {
  technologyId: string;
  projectId?: string;
}
