import { Component } from '@angular/core';

import { AbstractAuthComponent } from '../../auth-base/abstract-auth.component';
import { login } from '../../state/actions';

@Component({
  selector: 'app-login',
  templateUrl: '../../auth-base/auth.html',
  styleUrls: ['./login.component.scss', '../../auth-base/auth.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent extends AbstractAuthComponent {
  title = 'Sign in';
  isRegister = false;
  onSubmit(): void {
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
