import { Clipboard } from '@angular/cdk/clipboard';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { takeUntil } from 'rxjs';

import { UnSubscriberComponent } from 'src/app/shared/classes/unsubscriber';
import { UserEditModalComponent } from '../user-edit/user-edit-modal/user-edit-modal.component';

@Component({
  selector: 'app-section-upper-bar',
  templateUrl: './section-upper-bar.component.html',
  styleUrls: ['./section-upper-bar.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionUpperBarComponent extends UnSubscriberComponent {
  @Input() data = {};

  constructor(public dialog: MatDialog, private clipboard: Clipboard) {
    super();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(UserEditModalComponent, {
      autoFocus: false,
      data: { data: this.data },
    });

    dialogRef.afterClosed().pipe(takeUntil(this.destroyed$)).subscribe();
  }

  copyToClipBoard(): void {
    console.log(this.data);
    this.clipboard.copy(JSON.stringify(this.data));
  }
}
