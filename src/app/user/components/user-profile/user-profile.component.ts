import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, take } from 'rxjs';

import {
  mobileModalWidth,
  mobileScreenWidth,
} from 'src/app/shared/constants/media-width';
import { ClipboardService } from 'src/app/shared/services/clipboard/clipboard.service';
import { clipboardPersonalInfoRegistry } from 'src/app/user/components/user-profile/constants/clipboard-property-names-registries/clipboard-personal-info-registry';
import { editDialogOptions } from 'src/app/user/components/user-profile/constants/edit-dialog-options';
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
export class UserProfileComponent implements OnInit {
  user$ = this.store.select(selectUser);
  loading$ = this.store.select(selectLoading);

  clipboardRegistry = clipboardPersonalInfoRegistry;

  constructor(
    private route: ActivatedRoute,
    private store: Store,
    private dialog: MatDialog,
    public clipboardService: ClipboardService,
    private media: MediaMatcher,
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.store.dispatch(userProfileActions.loadUser({ id }));
    }
  }

  onEditDescription(): void {
    const dialogRef = this.dialog.open(EditDescriptionModalComponent, {
      ...editDialogOptions,
      width: this.media.matchMedia(mobileScreenWidth).matches
        ? mobileModalWidth
        : '',
      maxWidth: this.media.matchMedia(mobileScreenWidth).matches
        ? mobileModalWidth
        : '',
      data: this.user$.pipe(
        map((user) => ({ positionDescription: user?.positionDescription })),
      ),
    });
    dialogRef
      .afterClosed()
      .pipe(take(1))
      .subscribe((data) => {
        if (data) {
          this.store.dispatch(userProfileActions.updateUser({ user: data }));
        }
      });
  }
}
