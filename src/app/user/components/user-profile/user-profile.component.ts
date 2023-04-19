import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { map, take } from 'rxjs';
import { ClipboardService } from 'src/app/shared/services/clipboard/clipboard.service';

import { EditDescriptionModalComponent } from 'src/app/user/components/user-profile/user-edit/edit-description-modal/edit-description-modal.component';
import { UserStore } from 'src/app/user/components/user-profile/user-profile.store';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [UserStore],
})
export class UserProfileComponent implements OnInit {
  user$ = this._userStore.user$;
  loading$ = this._userStore.loading$;

  constructor(
    private route: ActivatedRoute,
    private readonly _userStore: UserStore,
    private dialog: MatDialog,
    public clipboardService: ClipboardService,
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this._userStore.getUser(id);
  }

  onEditDescription(): void {
    const dialogRef = this.dialog.open(EditDescriptionModalComponent, {
      restoreFocus: false,
      autoFocus: false,
      data: this.user$.pipe(
        map((user) => ({ positionDescription: user?.positionDescription })),
      ),
    });
    dialogRef
      .afterClosed()
      .pipe(take(1))
      .subscribe((data) => {
        if (data) {
          this._userStore.updateUserInfo(data);
        }
      });
  }
}
