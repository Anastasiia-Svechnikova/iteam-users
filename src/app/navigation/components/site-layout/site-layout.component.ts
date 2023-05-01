import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';

import { headerUserNavigationMenuLinks } from 'src/app/navigation/models/header-user-navigation-menu-links';
import { mainUserActions } from 'src/app/user/state/actions';
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
      linksData?.filter((link) =>
        headerUserNavigationMenuLinks.includes(link.name),
      ),
    ),
  );

  showFiller = false;
  title = '';

  constructor(private route: ActivatedRoute, private store: Store) {}

  ngOnInit(): void {
    this.setHeader();
    this.store.dispatch(mainUserActions.loadCurrentUser());
  }

  private setHeader(): void {
    const finalChild = this.getFinalRouterChild(this.route.snapshot.firstChild);
    this.title = finalChild?.data['header'];
  }

  private getFinalRouterChild(
    firstChild: ActivatedRouteSnapshot | null,
  ): ActivatedRouteSnapshot | null {
    if (!firstChild?.firstChild) {
      return firstChild;
    }
    return this.getFinalRouterChild(firstChild?.firstChild);
  }
}
