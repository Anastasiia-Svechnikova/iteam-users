import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable, takeUntil } from 'rxjs';

import { IUserBankInvoiceData } from 'src/app/shared/interfaces/user-bank-invoice-data';
import { AbstractEditModalComponent } from 'src/app/user/components/user-profile/user-edit/abstract-edit-modal-component';
import { userBankInfoTitles } from 'src/app/user/components/user-profile/constants/user-bank-info-titles';
import { userBankInfoValidationPatterns } from 'src/app/user/components/user-profile/user-edit/validation-patterns';

export type DialogData = IUserBankInvoiceData;

@Component({
  selector: 'app-edit-bank-info-modal',
  templateUrl: './edit-bank-info-modal.component.html',
  styleUrls: ['../user-edit.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditBankInfoModalComponent extends AbstractEditModalComponent<EditBankInfoModalComponent> {
  formData!: DialogData;
  userBankInfoTitles = userBankInfoTitles;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<EditBankInfoModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Observable<DialogData>,
  ) {
    super(dialogRef);
  }

  setFormData(): void {
    this.data
      .pipe(takeUntil(this.destroyed$))
      .subscribe((data) => (this.formData = data));
  }

  createForm(): void {
    this.form = this.fb.group({});

    const properties = [...userBankInfoTitles.keys()];
    properties.forEach((property) => {
      if (userBankInfoValidationPatterns.get(property)) {
        this.form.addControl(
          property,
          this.fb.control(
            this.formData[property],
            Validators.pattern(
              userBankInfoValidationPatterns.get(property) as string,
            ),
          ),
        );
      }

      this.form.addControl(property, this.fb.control(this.formData[property]));
    });
  }
}
