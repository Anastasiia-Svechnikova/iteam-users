import { UserRoles } from 'src/app/shared/constants/constants';

export const siteNavigationLinksData = [
  {
    path: ['/dashboard', 'home'],
    iconName: 'home',
    title: 'home',
  },
  {
    path: ['/dashboard', 'users', localStorage.getItem('id')],
    iconName: 'person',
    title: 'profile',
  },
  {
    path: ['/dashboard', 'projects'],
    iconName: 'dashboard',
    title: 'projects',
  },
  {
    path: ['/dashboard', 'admin'],
    iconName: 'bar_chart',
    title: 'admin',
    restrictedAccessRoles: [UserRoles.Admin],
  },
];

export enum HeaderTitles {
  home = 'Home Page',
  admin = 'Admin Page',
  user = 'User Page',
  projects = 'Projects Page',
}
