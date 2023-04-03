import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, takeUntil } from 'rxjs';
import { UnSubscriberComponent } from 'src/app/shared/classes/unsubscriber';
import { HEADER_TITLES } from 'src/app/shared/constants/constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent extends UnSubscriberComponent implements OnInit {
  @Output() toggleSideNav: EventEmitter<void> = new EventEmitter();

  title!: string;
  constructor(private router: Router) {
    super();
  }

  ngOnInit(): void {
    this.router.events
      .pipe(
        takeUntil(this.destroyed$),
        filter((events) => events instanceof NavigationEnd),
        map((event) => event as NavigationEnd),
      )
      .subscribe((events) => {
        const url = events.url.split('/')[1];
        this.title = HEADER_TITLES.get(url) as string;
      });
  }

  onToggleSideNav(): void {
    this.toggleSideNav.emit();
  }
}
