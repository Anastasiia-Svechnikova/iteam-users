import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { login, register } from '../../state/actions';
import { selectRequestingStatus } from '../../state/selectors';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthComponent {
  isRequesting = this.store.select(selectRequestingStatus);
  isRegister: boolean;
  title: string;
  form: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required]),
  });
  constructor(
    private router: Router,
    private store: Store,
    public activatedRoute: ActivatedRoute,
  ) {
    this.isRegister = activatedRoute.snapshot.data['isRegister'];
    this.title = activatedRoute.snapshot.data['title'];
  }

  onSubmit(): void {
    if (this.form.valid) {
      if (this.activatedRoute.snapshot.data['isRegister']) {
        this.store.dispatch(
          register({
            credentials: {
              email: this.email.value,
              password: this.password.value,
            },
          }),
        );
      } else {
        this.store.dispatch(
          login({
            credentials: {
              email: this.email.value,
              password: this.password.value,
            },
          }),
        );
      }
    }
  }

  get email(): FormControl {
    return this.form.get('email') as FormControl;
  }
  get password(): FormControl {
    return this.form.get('password') as FormControl;
  }
}
