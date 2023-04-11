import { UserRoles } from 'src/app/shared/constants/constants';

export const siteNavigationLinksData = [
  {
    path: ['/dashboard', 'home'],
    iconName: 'home',
    title: 'home',
    accessRoles: [UserRoles.Admin, UserRoles.Guest],
  },
  {
    path: ['/dashboard', 'user-profile', localStorage.getItem('id')],
    iconName: 'person',
    title: 'profile',
    accessRoles: [UserRoles.Admin, UserRoles.Guest],
  },
  {
    path: ['/dashboard', 'projects'],
    iconName: 'dashboard',
    title: 'projects',
    accessRoles: [UserRoles.Admin, UserRoles.Guest],
  },
  {
    path: ['/dashboard', 'admin'],
    iconName: 'bar_chart',
    title: 'admin',
    accessRoles: [UserRoles.Admin],
  },
];

export enum HeaderTitles {
  home = 'Home Page',
  admin = 'Admin Page',
  user = 'User Page',
  projects = 'Projects Page',
}
