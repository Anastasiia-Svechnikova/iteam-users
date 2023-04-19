import { Directive, HostListener, OnDestroy, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subject, Subscription } from 'rxjs';

import { ConfirmModalComponent } from 'src/app/shared/components/confirm-modal/confirm-modal.component';

@Directive({
  selector: '[appConfirmDialog]',
})
export class ConfirmDialogDirective implements OnDestroy {
  @Output() confirm = new Subject<void>();
  private confirmedSubscription!: Subscription;

  constructor(private dialog: MatDialog) {}

  @HostListener('click')
  click(): void {
    this.confirmedSubscription = this.dialog
      .open(ConfirmModalComponent)
      .componentInstance.confirmed.subscribe(() => this.confirm.next());
  }

  ngOnDestroy(): void {
    if (this.confirmedSubscription) {
      this.confirmedSubscription.unsubscribe();
    }
  }
}
