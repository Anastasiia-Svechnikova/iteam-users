import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { takeUntil } from 'rxjs';
import { UnSubscriberComponent } from 'src/app/shared/classes/unsubscriber';
import { UserProfileInfoSections } from 'src/app/user/models.ts/user-profile-info-sections';
import { UserProfileInfoSectionTitles } from '../../models.ts/user-profile-section-titles';
import { UserEditModalComponent } from '../user-edit/user-edit-modal/user-edit-modal.component';

@Component({
  selector: 'app-section-upper-bar',
  templateUrl: './section-upper-bar.component.html',
  styleUrls: ['./section-upper-bar.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionUpperBarComponent
  extends UnSubscriberComponent
  implements OnInit
{
  @Input() section!: UserProfileInfoSections;
  @Input() mode!: 'full' | 'noControls';
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
      data: { section: this.section },
    });

    dialogRef.afterClosed().pipe(takeUntil(this.destroyed$)).subscribe();
  }
}
