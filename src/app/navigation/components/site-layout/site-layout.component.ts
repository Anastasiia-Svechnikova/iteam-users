import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { logout } from 'src/app/auth/state/actions';
import { mainUserActions } from 'src/app/user/state/actions';
import {
  selectCurrentUserName,
  selectSiteNavigationLinksDataByUserRole,
} from 'src/app/user/state/selectors';

@Component({
  selector: 'app-site-layout',
  templateUrl: './site-layout.component.html',
  styleUrls: ['./site-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteLayoutComponent implements OnInit {
  siteNavigationLinksData$ = this.store.select(
    selectSiteNavigationLinksDataByUserRole,
  );
  currentUserName$ = this.store.select(selectCurrentUserName);

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(mainUserActions.loadCurrentUser());
  }

  onLogout(): void {
    this.store.dispatch(logout());
  }
}
