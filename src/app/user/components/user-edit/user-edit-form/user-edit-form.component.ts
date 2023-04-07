import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-edit-form',
  templateUrl: './user-edit-form.component.html',
  styleUrls: ['./user-edit-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserEditFormComponent implements OnInit {

  messageForm!: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
  }

  private createForm(): void {
    this.messageForm = this.fb.group({
      name: ['', Validators.required],
      text: ['', Validators.required],
    });
  }

  // onSubmit(): void {
  //   const newMessage = { ...this.messageForm.value, date: Date.now() };
  //   console.log(newMessage);
  // }
}
