import { Directive, HostListener, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subject, takeUntil } from 'rxjs';

import { UnSubscriberComponent } from 'src/app/shared/classes/unsubscriber';
import { ConfirmModalComponent } from 'src/app/shared/components/confirm-modal/confirm-modal.component';

@Directive({
  selector: '[appConfirmDialog]',
})
export class ConfirmDialogDirective extends UnSubscriberComponent {
  @Output() confirm = new Subject<void>();

  constructor(private dialog: MatDialog) {
    super();
  }

  @HostListener('click')
  click(): void {
    this.dialog
      .open(ConfirmModalComponent)
      .componentInstance.confirmed.pipe(takeUntil(this.destroyed$))
      .subscribe(() => this.confirm.next());
  }
}
