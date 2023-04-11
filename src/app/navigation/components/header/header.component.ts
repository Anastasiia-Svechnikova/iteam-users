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

  currentUserLinkPath = siteNavigationLinksData.find((link) =>
    link.path.includes('user-profile'),
  )?.path;

  onToggleSideNav(): void {
    this.toggleSideNav.emit();
  }
}
