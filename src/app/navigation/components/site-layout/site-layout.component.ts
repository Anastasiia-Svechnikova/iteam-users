import { AfterViewInit, ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserRoles } from 'src/app/shared/constants/constants';
import {
  headerTitles,
  sideNavigationLinksData,
} from '../../constants/navigation-list';

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

  constructor(private route: Router, private cdref: ChangeDetectorRef) {}

  setHeader(): void {
    const path = this.route.url.split('/')[1];
    const decodedPath = decodeURIComponent(path);
    this.title = headerTitles.get(decodedPath) as string;
  }
  ngAfterViewInit(): void {
    this.cdref.detectChanges();
  }
}
