import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

import { siteNavigationLinksData } from 'src/app/navigation/constants/constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  @Output() toggleSideNav: EventEmitter<void> = new EventEmitter();
  @Input() title = '';
  sideNavOpen = false;

  currentUserLinkPath = siteNavigationLinksData.find((link) =>
    link.path.includes('users'),
  )?.path;

  onToggleSideNav(): void {
    this.sideNavOpen = !this.sideNavOpen;
    this.toggleSideNav.emit();
  }
}
