import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import { logout } from 'src/app/auth/state/actions';
import { siteNavigationLinksData } from 'src/app/navigation/constants/site-navigation-links-data';
import { ISiteNavigationLink } from 'src/app/navigation/models/site-navigation-link';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  @Input() title = '';
  @Input() linksData!: ISiteNavigationLink[] | null;

  currentUserLinkPath = siteNavigationLinksData.find((link) =>
    link.path.includes('user'),
  )?.path;

  constructor(private store: Store) {}

  onLogout(): void {
    this.store.dispatch(logout());
  }
}
