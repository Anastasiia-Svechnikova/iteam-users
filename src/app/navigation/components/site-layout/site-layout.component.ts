import { AfterViewInit, ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UserRoles } from 'src/app/shared/constants/constants';
import { sideNavigationLinksData } from '../../constants/constants';

@Component({
  selector: 'app-site-layout',
  templateUrl: './site-layout.component.html',
  styleUrls: ['./site-layout.component.scss'],
})
export class SiteLayoutComponent implements AfterViewInit {
  sideNavigationData = sideNavigationLinksData;
  title = '';

  // the role will be selected from the store user data
  role = UserRoles.Admin;

  constructor(
    private route: ActivatedRoute,
    private cdref: ChangeDetectorRef,
  ) {}

  setHeader(): void {
    this.title = this.route.snapshot.firstChild?.data['header'];
  }
  ngAfterViewInit(): void {
    this.cdref.detectChanges();
  }
}
