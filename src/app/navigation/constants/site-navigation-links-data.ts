import { ISiteNavigationLink } from 'src/app/navigation/models/site-navigation-link';
import { SiteNavigationLinkNames } from 'src/app/navigation/models/site-navigation-links-names';
import { UserRoles } from 'src/app/shared/constants/constants';

export const siteNavigationLinksData: ISiteNavigationLink[] = [
  {
    path: ['/dashboard', 'home'],
    iconName: 'home',
    name: SiteNavigationLinkNames.home,
  },
  {
    path: ['/dashboard', 'user'],
    iconName: 'person',
    name: SiteNavigationLinkNames.currentUser,
  },
  {
    path: ['/dashboard', 'projects'],
    iconName: 'dashboard',
    name: SiteNavigationLinkNames.projects,
  },
  {
    path: ['/dashboard', 'user', 'all'],
    iconName: 'bar_chart',
    name: SiteNavigationLinkNames.allUsers,
    // in prod mode all users route will be only available to UserRole.Admin
    restrictedAccessRoles: [UserRoles.Guest],
  },
];
