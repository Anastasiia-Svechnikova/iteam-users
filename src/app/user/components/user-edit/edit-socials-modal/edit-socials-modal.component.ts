import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable, takeUntil } from 'rxjs';
import { AbstractEditModalComponent } from 'src/app/user/components/user-edit/abstract-edit-modal-component';
import { UserSocialLinksTitles } from 'src/app/user/constants/social-links';

export interface DialogData {
  upwork: string;
  github: string;
  linkedin: string;
  telegramTag: string;
}

@Component({
  selector: 'app-edit-socials-modal',
  templateUrl: './edit-socials-modal.component.html',
  styleUrls: ['./edit-socials-modal.component.scss', '../user-edit.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditSocialsModalComponent extends AbstractEditModalComponent {
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
      .subscribe(
        ({ upwork, github, linkedin, telegramTag }) =>
          (this.formData = { upwork, linkedin, telegramTag, github }),
      );
  }

  createForm(): void {
    this.form = this.fb.group({
      upwork: [this.formData.upwork, Validators.required],
      linkedin: [this.formData.linkedin, Validators.required],
      github: [this.formData.github, Validators.required],
      telegramTag: [this.formData.telegramTag, Validators.required],
    });
  }
}
