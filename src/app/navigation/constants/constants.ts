import { UserRoles } from 'src/app/shared/constants/constants';

export const siteNavigationLinksData = [
  {
    path: ['/dashboard', 'home'],
    iconName: 'home',
    title: 'home',
  },
  {
    path: ['/dashboard', 'user', localStorage.getItem('id')],
    iconName: 'person',
    title: 'profile',
  },
  {
    path: ['/dashboard', 'projects'],
    iconName: 'dashboard',
    title: 'projects',
  },
  {
    path: ['/dashboard', 'user', 'all'],
    iconName: 'bar_chart',
    title: 'all users',
    restrictedAccessRoles: [UserRoles.Guest],
  },
];

export enum HeaderTitles {
  home = 'Home Page',
  allUsers = 'All Users Page',
  user = 'User Page',
  projects = 'Projects Page',
}
