import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';

import { userActions } from 'src/app/user/state/actions';
import { selectUser } from 'src/app/user/state/selectors';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserComponent implements OnInit {
  user$ = this.store.select(selectUser);

  constructor(private store: Store, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    // this.store.dispatch(userActions.loadUserById({ id }));
  }
}
