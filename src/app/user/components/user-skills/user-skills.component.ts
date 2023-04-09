import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserProfileInfoSections } from '../../models.ts/user-profile-info-sections';
import { selectCurrentUserSkills } from '../../state/selectors';

@Component({
  selector: 'app-user-skills',
  templateUrl: './user-skills.component.html',
  styleUrls: ['./user-skills.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserSkillsComponent {
  skills$ = this.store.select(selectCurrentUserSkills);
  sectionTypes = UserProfileInfoSections;

  constructor(private store: Store) {}
}
