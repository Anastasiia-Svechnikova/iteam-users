import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable, takeUntil } from 'rxjs';

import { AbstractEditModalComponent } from 'src/app/user/components/user-profile/user-edit/abstract-edit-modal-component';

export interface DialogData {
  positionDescription: string;
}

@Component({
  selector: 'app-edit-description-modal',
  templateUrl: './edit-description-modal.component.html',
  styleUrls: ['./edit-description-modal.component.scss', '../user-edit.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditDescriptionModalComponent extends AbstractEditModalComponent<EditDescriptionModalComponent> {
  formData!: string;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<EditDescriptionModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Observable<DialogData>,
  ) {
    super(dialogRef);
  }

  setFormData(): void {
    this.data
      .pipe(takeUntil(this.destroyed$))
      .subscribe(
        ({ positionDescription }) => (this.formData = positionDescription),
      );
  }

  createForm(): void {
    this.form = this.fb.group({
      positionDescription: [this.formData],
    });
  }
}
