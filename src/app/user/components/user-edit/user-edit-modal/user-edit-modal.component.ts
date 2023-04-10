import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnInit,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { IUserSocialLinksData } from 'src/app/shared/interfaces/user-social-links-data';
import { IUserWorkHistory } from 'src/app/shared/interfaces/user-work-history';

export interface DialogData {
  data: string[] | IUserWorkHistory[] | IUserSocialLinksData;
}
@Component({
  selector: 'app-user-edit-modal',
  templateUrl: './user-edit-modal.html',
  styleUrls: ['./user-edit-modal.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserEditModalComponent implements OnInit {
  userEditForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<UserEditModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  private createForm(): void {
    this.userEditForm = this.fb.group({
      customControl: [this.data.data, Validators.required],
    });
  }

  onSubmit(): void {
    this.dialogRef.close();
  }
}
