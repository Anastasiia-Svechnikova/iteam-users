import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable, takeUntil } from 'rxjs';

import { IUserEducationDetails } from 'src/app/shared/interfaces/user-education';
import { AbstractEditModalComponent } from 'src/app/user/components/user-profile/user-edit/abstract-edit-modal-component';

@Component({
  selector: 'app-education-form-modal',
  templateUrl: './education-form-modal.component.html',
  styleUrls: ['./education-form-modal.component.scss', '../user-edit.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EducationFormModalComponent extends AbstractEditModalComponent<EducationFormModalComponent> {
  dialogData!: IUserEducationDetails;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: Observable<IUserEducationDetails>,
  ) {
    super();
  }

  setFormData(): void {
    this.data.pipe(takeUntil(this.destroyed$)).subscribe((data) => {
      this.dialogData = data;
    });
  }

  createForm(): void {
    this.form = this.fb.group({
      universityName: [this.dialogData.universityName, Validators['required']],
      startDate: [this.dialogData.startDate, Validators['required']],
      endDate: [this.dialogData.endDate, Validators['required']],
      educationLevel: [this.dialogData.educationLevel, Validators['required']],
      specialization: [this.dialogData.specialization, Validators['required']],
    });
  }
}
