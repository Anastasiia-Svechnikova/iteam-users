import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';

import { userActions } from 'src/app/user/state/actions';
import { selectSiteNavigationLinksDataByUserRole } from 'src/app/user/state/selectors';

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

  showFiller = false;
  title = '';

  constructor(private route: ActivatedRoute, private store: Store) {}

  ngOnInit(): void {
    this.setHeader();
    this.store.dispatch(userActions.loadCurrentUser());
  }

  setHeader(): void {
    this.title = this.route.snapshot.firstChild?.data['header'];
  }
}
