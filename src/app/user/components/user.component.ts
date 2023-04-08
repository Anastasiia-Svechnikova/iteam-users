import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { mainUserActions } from 'src/app/main/state/actions';
import { selectCurrentUser } from 'src/app/main/state/selectors';
import { UserProfileInfoSections } from '../models.ts/user-profile-info-sections';
import { UserProfileSectionsUpperBarMode } from '../models.ts/user-profile-sections-upper-bar-modes';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserComponent implements OnInit {
  user$ = this.store.select(selectCurrentUser);
  skills$ = this.user$.pipe(map((user) => user?.skills?.split(' ')));
  sectionTypes = UserProfileInfoSections;
  upperBarModes = UserProfileSectionsUpperBarMode;

  constructor(private store: Store) {}
  ngOnInit(): void {
    this.store.dispatch(mainUserActions.loadCurrentUser());
  }
}
