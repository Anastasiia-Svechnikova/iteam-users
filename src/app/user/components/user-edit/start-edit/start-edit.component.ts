import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { takeUntil } from 'rxjs';
import { UnSubscriberComponent } from 'src/app/shared/classes/unsubscriber';
import { UserProfileInfoSectionTitles } from 'src/app/user/constants/user-profile-section-titles';
import { UserProfileInfoSections } from 'src/app/user/models.ts/user-profile-info-sections';
import { UserProfileSectionsUpperBarMode } from 'src/app/user/models.ts/user-profile-sections-upper-bar-modes';
import { UserEditModalComponent } from '../user-edit-modal/user-edit-modal.component';

@Component({
  selector: 'app-start-edit',
  templateUrl: './start-edit.component.html',
  styleUrls: ['./start-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StartEditComponent
  extends UnSubscriberComponent
  implements OnInit
{
  @Input() section!: UserProfileInfoSections;
  @Input() mode!: UserProfileSectionsUpperBarMode;
  modeTypes = UserProfileSectionsUpperBarMode;
  title!: string;

  constructor(public dialog: MatDialog) {
    super();
  }
  ngOnInit(): void {
    this.title = UserProfileInfoSectionTitles[this.section];
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(UserEditModalComponent, {
      autoFocus: false,
      data: { data: this.section },
    });

    dialogRef.afterClosed().pipe(takeUntil(this.destroyed$)).subscribe();
  }
}
