import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { takeUntil } from 'rxjs';
import { UnSubscriberComponent } from 'src/app/shared/classes/unsubscriber';
import { UserDataEditSections } from 'src/app/user/models.ts/user-data-edit-sections';
import { UserEditModalComponent } from '../user-edit-modal/user-edit-modal.component';

@Component({
  selector: 'app-start-edit',
  templateUrl: './start-edit.component.html',
  styleUrls: ['./start-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StartEditComponent extends UnSubscriberComponent {
  @Input() dataToEdit!: UserDataEditSections;
  constructor(public dialog: MatDialog) {
    super();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(UserEditModalComponent, {
      autoFocus: false,
      data: { data: this.dataToEdit },
    });

    dialogRef.afterClosed().pipe(takeUntil(this.destroyed$)).subscribe();
  }
}
