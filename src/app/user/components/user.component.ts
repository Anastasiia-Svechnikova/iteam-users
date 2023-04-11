import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { mainUserActions } from 'src/app/main/state/actions';
import { selectCurrentUser } from 'src/app/main/state/selectors';
import { UserProfileInfoSections } from '../models.ts/user-profile-info-sections';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserComponent implements OnInit {
  user$ = this.store.select(selectCurrentUser);
  sectionTypes = UserProfileInfoSections;

  constructor(private store: Store) {}

  ngOnInit(): void {
    console.log;
    this.store.dispatch(mainUserActions.loadCurrentUser());
  }
}
