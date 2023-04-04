import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {
  AccessOptions,
  sideNavigationLinksData,
} from 'src/app/navigation/constants/constants';

@Component({
  selector: 'app-site-layout',
  templateUrl: './site-layout.component.html',
  styleUrls: ['./site-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteLayoutComponent implements OnInit {
  accessOptions = AccessOptions;
  sideNavigationData = sideNavigationLinksData;
  title = '';

  // isAdmin will be selected from the store user data
  isAdmin = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.setHeader();
  }

  setHeader(): void {
    this.title = this.route.snapshot.firstChild?.data['header'];
  }
}
