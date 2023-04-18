import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { headerUserNavigationMenuLinks } from 'src/app/navigation/models/header-user-navigation-menu-links';

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

  headerUserNavigationMenuLinksData$ = this.siteNavigationLinksData$.pipe(
    map((linksData) =>
      linksData?.filter((link) => headerUserNavigationMenuLinks.includes(link.name)),
    ),
  );

  showFiller = false;
  title = '';

  constructor(private route: ActivatedRoute, private store: Store) {}

  ngOnInit(): void {
    this.setHeader();
    this.store.dispatch(userActions.loadCurrentUser());
  }

  setHeader(): void {
    this.title =
      this.route.snapshot.firstChild?.data['header'] ||
      this.route.snapshot.firstChild?.firstChild?.data['header'];
  }
}
