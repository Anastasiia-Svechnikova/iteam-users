import { Component } from '@angular/core';

import { AbstractAuthComponent } from '../../classes/abstract-auth.component';
import { login } from '../../state/actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', '../../styles/auth.scss'],
})
export class LoginComponent extends AbstractAuthComponent {
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
