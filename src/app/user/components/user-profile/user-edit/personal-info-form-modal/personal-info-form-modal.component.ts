import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable, takeUntil } from 'rxjs';
import { IUserPersonalData } from 'src/app/shared/interfaces/user-personal-info-data';
import { AbstractEditModalComponent } from 'src/app/user/components/user-profile/user-edit/abstract-edit-modal-component';

@Component({
  selector: 'app-personal-info-form-modal',
  templateUrl: './personal-info-form-modal.component.html',
  styleUrls: ['./personal-info-form-modal.component.scss', '../user-edit.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonalInfoFormModalComponent extends AbstractEditModalComponent<PersonalInfoFormModalComponent> {
  dialogData!: IUserPersonalData;
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: Observable<IUserPersonalData>,
  ) {
    super();
  }

  myFilter = (date: Date | null): boolean => {
    if (this.form.controls['startDate'].value) {
      return date
        ? new Date(date) >= new Date(this.form.controls['startDate'].value)
        : false;
    }
    return false;
  };

  myFilter2 = (date: Date | null): boolean => {
    if (this.form.controls['endDate'].value) {
      return date
        ? new Date(date) <= new Date(this.form.controls['endDate'].value)
        : false;
    }
    return true;
  };

  setFormData(): void {
    this.data.pipe(takeUntil(this.destroyed$)).subscribe((data) => {
      this.dialogData = data;
    });
  }
  createForm(): void {
    this.form = this.fb.group({
      name: [this.dialogData.name],
      surname: [this.dialogData.surname],
      status: [this.dialogData.status],
      birthday: [this.dialogData.birthday],
      email: [this.dialogData.email, Validators.email],
      startDate: [this.dialogData.startDate],
      endDate: [this.dialogData.endDate],
      endReason: [this.dialogData.endReason],
      phone: [this.dialogData.phone],
    });
  }
}
