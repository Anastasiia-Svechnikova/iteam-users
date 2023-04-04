import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { login, register } from '../../state/actions';
import { selectRequestingStatus } from '../../state/reducer';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  isRequesting: Observable<boolean>;
  isRegister: boolean;
  title: string;
  form: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required]),
    rememberMe: new FormControl(false),
  });
  constructor(
    private router: Router,
    private store: Store,
    public activatedRoute: ActivatedRoute,
  ) {
    this.isRequesting = store.select(selectRequestingStatus);
    this.isRegister = activatedRoute.snapshot.data['isRegister'];
    this.title = activatedRoute.snapshot.data['title'];
  }

  onLogin(): void {
    if (this.form.valid) {
      if (this.activatedRoute.snapshot.data['isRegister']) {
        this.store.dispatch(
          register({ email: this.email.value, password: this.password.value }),
        );
      } else {
        this.store.dispatch(
          login({ email: this.email.value, password: this.password.value }),
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
