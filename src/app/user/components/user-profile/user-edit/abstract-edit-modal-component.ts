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
    this.checkForNumberValues();
    this.dRef.close(this.form.value);
  }

  protected checkForNumberValues(): void {
    const updateUserDTONumericProperties = [
      'individualEntrepreneurIndividualTaxNumber',
      'individualEntrepreneurBankCode',
    ];
    updateUserDTONumericProperties.forEach((property) => {
      if (this.form.value[property]) {
        this.form.value[property] = Number(this.form.value[property]);
      } else if (this.form.value[property] === '') {
        this.form.value[property] = null;
      }
    });
  }
}
