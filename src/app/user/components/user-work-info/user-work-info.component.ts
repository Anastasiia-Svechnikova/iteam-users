import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCurrentUser } from 'src/app/main/state/selectors';
import { UserProfileInfoSections } from '../../models.ts/user-profile-info-sections';
import { UserProfileSectionsUpperBarMode } from '../../models.ts/user-profile-sections-upper-bar-modes';

@Component({
  selector: 'app-user-work-info',
  templateUrl: './user-work-info.component.html',
  styleUrls: ['./user-work-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserWorkInfoComponent {
  user$ = this.store.select(selectCurrentUser);
  sectionTypes = UserProfileInfoSections;
  upperBarModes = UserProfileSectionsUpperBarMode;

  constructor(private store: Store) {}
}
