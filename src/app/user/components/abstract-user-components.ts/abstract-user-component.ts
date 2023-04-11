import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Clipboard } from '@angular/cdk/clipboard';

import { Store } from '@ngrx/store';
import { UnSubscriberComponent } from 'src/app/shared/classes/unsubscriber';

@Component({
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export abstract class AbstractUserInfoComponent extends UnSubscriberComponent {
  constructor(
    protected store: Store,
    public clipboard: Clipboard,
    public dialog: MatDialog,
  ) {
    super();
  }

  abstract openModal(): void;
  abstract copyContent(): void;
}
