import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
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
    // public dialogRef: MatDialogRef<EditDescriptionModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Observable<DialogData>,
  ) {
    super();
  }

  setFormData(): void {
    this.data
      .pipe(takeUntil(this.destroyed$))
      .subscribe((data) => (this.formData = data.positionDescription));
  }

  createForm(): void {
    this.form = this.fb.group({
      positionDescription: [this.formData],
    });
  }
}
