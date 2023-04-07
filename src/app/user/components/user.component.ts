import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { mainUserActions } from 'src/app/main/state/actions';
import { selectCurrentUser } from 'src/app/main/state/selectors';
import { UserDataEditSections } from '../models.ts/user-data-edit-sections';

import { user } from './mock-user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserComponent implements OnInit {
  user = user.user;
  user$ = this.store.select(selectCurrentUser);
  skills$ = this.user$.pipe(map((user) => user?.skills?.split(' ')));
  skills = this.user.skills.split(' ');
  dataToEditSections = UserDataEditSections;

  constructor(private store: Store) {}
  ngOnInit(): void {
    this.store.dispatch(mainUserActions.loadCurrentUser());
  }
}
