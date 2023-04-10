import { Clipboard } from '@angular/cdk/clipboard';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { takeUntil } from 'rxjs';

import { UnSubscriberComponent } from 'src/app/shared/classes/unsubscriber';
import { UserProfileInfoSections } from 'src/app/user/models.ts/user-profile-info-sections';
import { selectUserInfoBySection } from 'src/app/user/state/selectors';
import { UserProfileInfoSectionTitles } from '../../constants/user-profile-section-titles';
import { UserEditModalComponent } from '../user-edit/user-edit-modal/user-edit-modal.component';

@Component({
  selector: 'app-section-upper-bar',
  templateUrl: './section-upper-bar.component.html',
  styleUrls: ['./section-upper-bar.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionUpperBarComponent extends UnSubscriberComponent {
  @Input() section!: UserProfileInfoSections;
  @Input() mode!: 'full' | 'noControls';
  UserProfileInfoSectionTitles = UserProfileInfoSectionTitles;

  userInfoBySection$ = this.store.select(
    selectUserInfoBySection(UserProfileInfoSections.personalDetails),
  );
  data!: any;

  constructor(
    public dialog: MatDialog,
    private clipboard: Clipboard,
    private store: Store,
  ) {
    super();
  }

  ngOnInit(): void {
    this.userInfoBySection$.subscribe((d) => (this.data = d));
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(UserEditModalComponent, {
      autoFocus: false,
      data: { section: this.section },
    });

    dialogRef.afterClosed().pipe(takeUntil(this.destroyed$)).subscribe();
  }
  copyToClipBoard(): void {
    this.clipboard.copy(JSON.stringify(this.data));
  }
}
