import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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
  styleUrls: ['./edit-contacts-modal.component.scss', '../user-edit.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditContactsModalComponent extends AbstractEditModalComponent {
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
      .subscribe(({ address, city }) => (this.formData = { address, city }));
  }

  createForm(): void {
    this.form = this.fb.group({
      address: [this.formData.address, Validators.required],
      city: [this.formData.city, Validators.required],
    });
  }
}
