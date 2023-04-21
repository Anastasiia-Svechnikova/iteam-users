import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable, takeUntil } from 'rxjs';

import { AbstractEditModalComponent } from 'src/app/user/components/user-profile/user-edit/abstract-edit-modal-component';
import { UserSocialLinksTitles } from 'src/app/user/components/user-profile/constants/social-links';
import { socialsUrlPattern } from 'src/app/user/components/user-profile/user-edit/validation-patterns';

export interface DialogData {
  upwork: string;
  github: string;
  linkedin: string;
  telegramTag: string;
}

@Component({
  selector: 'app-edit-socials-modal',
  templateUrl: './edit-socials-modal.component.html',
  styleUrls: ['../user-edit.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditSocialsModalComponent extends AbstractEditModalComponent<EditSocialsModalComponent> {
  formData!: DialogData;
  UserSocialLinksTitles = UserSocialLinksTitles;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<EditSocialsModalComponent>,
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
    const properties = [...UserSocialLinksTitles.keys()];
    properties.forEach((property) => {
      this.form.addControl(
        property,
        this.fb.control(
          this.formData[property],
          Validators.pattern(socialsUrlPattern),
        ),
      );
    });
  }
}
