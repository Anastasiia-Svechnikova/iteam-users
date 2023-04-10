import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { takeUntil } from 'rxjs';

import { UnSubscriberComponent } from 'src/app/shared/classes/unsubscriber';
import { UserDetailsStore } from 'src/app/user-list/components/user-details/user-details.component.store';
import { SocialLinks } from 'src/app/user-list/constants/social-links';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
  providers: [UserDetailsStore],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserDetailsComponent extends UnSubscriberComponent {
  user$ = this.userDetailsStore.user$;
  socialLinks = SocialLinks;

  constructor(
    private userDetailsStore: UserDetailsStore,
    private route: ActivatedRoute,
  ) {
    super();
    this.route.params.pipe(takeUntil(this.destroyed$)).subscribe((params) => {
      this.userDetailsStore.getUser(params['id']);
    });
  }
}
