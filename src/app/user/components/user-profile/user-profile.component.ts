import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, takeUntil } from 'rxjs';

import { AbstractUserProfileComponent } from 'src/app/user/components/user-profile/abstract-user-profile-component';
import { clipboardPersonalInfoRegistry } from 'src/app/user/components/user-profile/constants/clipboard-property-names-registries/clipboard-personal-info-registry';
import { IUpdateUserDTO } from 'src/app/user/components/user-profile/interfaces/update-user-dto';
import { userProfileActions } from 'src/app/user/components/user-profile/state/actions';
import {
  selectLoading,
  selectUser,
} from 'src/app/user/components/user-profile/state/selectors';
import { EditDescriptionModalComponent } from 'src/app/user/components/user-profile/user-edit/edit-description-modal/edit-description-modal.component';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserProfileComponent
  extends AbstractUserProfileComponent
  implements OnInit
{
  user$ = this.store.select(selectUser);
  loading$ = this.store.select(selectLoading);

  clipboardRegistry = clipboardPersonalInfoRegistry;

  constructor(private route: ActivatedRoute) {
    super();
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.store.dispatch(userProfileActions.loadUser({ id }));
    }
  }

  onEdit(): void {
    this.setModal<EditDescriptionModalComponent, IUpdateUserDTO>(
      EditDescriptionModalComponent,
      this.user$.pipe(
        map((user) => ({ positionDescription: user?.positionDescription })),
      ),
    )
      .afterClosed()
      .pipe(takeUntil(this.destroyed$))
      .subscribe((data) => {
        if (data) {
          this.store.dispatch(userProfileActions.updateUser({ user: data }));
        }
      });
  }
}
