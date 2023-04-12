import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnInit,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable, takeUntil } from 'rxjs';

import { UnSubscriberComponent } from 'src/app/shared/classes/unsubscriber';

export interface DialogData {
  positionDescription: Observable<string>;
}

@Component({
  selector: 'app-edit-description-modal',
  templateUrl: './edit-description-modal.component.html',
  styleUrls: ['./edit-description-modal.component.scss', '../user-edit.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditDescriptionModalComponent
  extends UnSubscriberComponent
  implements OnInit
{
  formData!: string;
  descriptionForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<EditDescriptionModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {
    super();
  }

  ngOnInit(): void {
    this.data.positionDescription
      .pipe(takeUntil(this.destroyed$))
      .subscribe(
        (positionDescription) => (this.formData = positionDescription),
      );
    this.createForm();
  }

  private createForm(): void {
    this.descriptionForm = this.fb.group({
      positionDescription: [this.formData, Validators.required],
    });
  }

  onSubmit(): void {
    this.dialogRef.close(this.descriptionForm.value);
  }
}
