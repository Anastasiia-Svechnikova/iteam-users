import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCurrentUser } from 'src/app/main/state/selectors';
import { UserProfileInfoSections } from '../../models.ts/user-profile-info-sections';
import { UserProfileSectionsUpperBarMode } from '../../models.ts/user-profile-sections-upper-bar-modes';

@Component({
  selector: 'app-user-personal-info',
  templateUrl: './user-personal-info.component.html',
  styleUrls: ['./user-personal-info.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserPersonalInfoComponent {
  sectionTypes = UserProfileInfoSections;
  upperBarModes = UserProfileSectionsUpperBarMode;
  user$ = this.store.select(selectCurrentUser);
  constructor(private store: Store) {}
}
