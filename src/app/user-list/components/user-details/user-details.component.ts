import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { takeUntil } from 'rxjs';

import { UserDetailsStore } from './user-details.component.store';
import { UnSubscriberComponent } from '../../../shared/classes/unsubscriber';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
  providers: [UserDetailsStore],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserDetailsComponent extends UnSubscriberComponent {
  user$ = this.userDetailsStore.user$;

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
