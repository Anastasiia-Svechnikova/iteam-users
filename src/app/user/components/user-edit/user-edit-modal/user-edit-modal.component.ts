import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnInit,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserDataEditSections } from 'src/app/user/models.ts/user-data-edit-sections';

export interface DialogData {
  data: UserDataEditSections;
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
      customControl: ['', Validators.required],
    });
  }

  onSubmit(): void {
    const newMessage = this.userEditForm.value;
    this.dialogRef.close(newMessage);
  }
}
