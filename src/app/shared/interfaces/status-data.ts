interface IStatusData {
  icon: string;
  name: string;
}
export interface IStatusesData {
  archived: IStatusData;
  unarchived: IStatusData;
}
