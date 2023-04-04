export enum AccessOptions {
  full = 'full',
  adminOnly = 'admin only',
}
export const sideNavigationLinksData = [
  {
    path: '/home',
    iconName: 'home',
    title: 'home',
    access: AccessOptions.full,
  },
  {
    path: '/user-profile',
    iconName: 'people',
    title: 'profile',
    access: AccessOptions.full,
  },
  {
    path: '/projects',
    iconName: 'dashboard',
    title: 'projects',
    access: AccessOptions.full,
  },
  {
    path: '/admin',
    iconName: 'bar_chart',
    title: 'admin',
    access: AccessOptions.adminOnly,
  },
];

export enum HeaderTitles {
  home = 'Home Page',
  admin = 'Admin Page',
  user = 'User Page',
  projects = 'Projects Page',
}
