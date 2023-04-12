import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

import { UnSubscriberComponent } from 'src/app/shared/classes/unsubscriber';

@Component({
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export abstract class AbstractEditModalComponent
  extends UnSubscriberComponent
  implements OnInit
{
  form!: FormGroup;
  constructor(private dRef: MatDialogRef<unknown>) {
    super();
  }

  ngOnInit(): void {
    this.setFormData();
    this.createForm();
  }

  abstract setFormData(): void;
  abstract createForm(): void;

  onSubmit(): void {
    this.dRef.close(this.form.value);
  }
}
