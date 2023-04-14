import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

import { UnSubscriberComponent } from 'src/app/shared/classes/unsubscriber';
import { updateUserDtoNumericProperties } from 'src/app/user/components/user-profile/constants/update-user-dto-numeric-properties';

@Component({
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export abstract class AbstractEditModalComponent<T>
  extends UnSubscriberComponent
  implements OnInit
{
  form!: FormGroup;
  constructor(private _dialogRef: MatDialogRef<T>) {
    super();
  }

  ngOnInit(): void {
    this.setFormData();
    this.createForm();
  }

  onSubmit(): void {
    this.checkForNumberValues();
    this._dialogRef.close(this.form.value);
  }

  abstract setFormData(): void;
  abstract createForm(): void;

  protected checkForNumberValues(): void {
    updateUserDtoNumericProperties.forEach((property) => {
      if (this.form.value[property]) {
        this.form.value[property] = Number(this.form.value[property]);
      } else if (this.form.value[property] === '') {
        this.form.value[property] = null;
      }
    });
  }
}
