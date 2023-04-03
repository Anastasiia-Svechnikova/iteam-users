import { UserRoles } from 'src/app/shared/constants/constants';

export const sideNavigationLinksData = [
  {
    path: '/home',
    iconName: 'home',
    title: 'home',
    accessRoles: [UserRoles.Admin, UserRoles.Guest],
  },
  {
    path: '/user-profile',
    iconName: 'people',
    title: 'profile',
    accessRoles: [UserRoles.Admin, UserRoles.Guest],
  },
  {
    path: '/projects',
    iconName: 'dashboard',
    title: 'projects',
    accessRoles: [UserRoles.Admin, UserRoles.Guest],
  },
  {
    path: '/admin',
    iconName: 'bar_chart',
    title: 'admin',
    accessRoles: [UserRoles.Admin],
  },
];

export const headerTitles = new Map<string, string>([
  ['home', 'Home Page'],
  ['admin', 'Admin page'],
  ['user-profile', 'User Profile Page'],
  ['projects', 'Projects Page'],
]);
