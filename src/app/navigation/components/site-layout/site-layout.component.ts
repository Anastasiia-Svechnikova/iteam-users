import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';

import { siteNavigationLinksData } from 'src/app/navigation/constants/constants';
import { UserRoles } from 'src/app/shared/constants/constants';
import { userActions } from 'src/app/user/state/actions';

@Component({
  selector: 'app-site-layout',
  templateUrl: './site-layout.component.html',
  styleUrls: ['./site-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteLayoutComponent implements OnInit {
  siteNavigationData = siteNavigationLinksData;
  title = '';

  role = UserRoles.Admin;

  constructor(private route: ActivatedRoute, private store: Store) {}

  ngOnInit(): void {
    this.setHeader();
    this.store.dispatch(userActions.loadCurrentUser());
  }

  setHeader(): void {
    this.title = this.route.snapshot.firstChild?.data['header'];
  }
}
