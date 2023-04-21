import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable, takeUntil } from 'rxjs';

import { AbstractEditModalComponent } from 'src/app/user/components/user-profile/user-edit/abstract-edit-modal-component';

export interface DialogData {
  address: string;
  city: string;
}

@Component({
  selector: 'app-edit-contacts',
  templateUrl: './edit-contacts-modal.component.html',
  styleUrls: ['../user-edit.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditContactsModalComponent extends AbstractEditModalComponent<EditContactsModalComponent> {
  formData!: DialogData;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<EditContactsModalComponent>,
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
    this.form = this.fb.group({
      address: [this.formData.address],
      city: [this.formData.city],
    });
  }
}
