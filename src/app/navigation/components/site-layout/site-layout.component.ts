import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { sideNavigationLinksData } from 'src/app/navigation/constants/constants';
import { UserRoles } from 'src/app/shared/constants/constants';

@Component({
  selector: 'app-site-layout',
  templateUrl: './site-layout.component.html',
  styleUrls: ['./site-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteLayoutComponent implements OnInit {
  sideNavigationData = sideNavigationLinksData;
  title = '';

  // the role will be selected from the store user data
  role = UserRoles.Admin;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.setHeader();
  }

  setHeader(): void {
    this.title = this.route.snapshot.firstChild?.data['header'];
  }
}
