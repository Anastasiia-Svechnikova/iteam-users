import { Component } from '@angular/core';

import { AbstractAuthComponent } from '../../classes/abstract-auth.component';
import { register } from '../../state/actions';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss', '../../styles/auth.scss'],
})
export class RegisterComponent extends AbstractAuthComponent {
  onSubmit(): void {
    this.store.dispatch(
      register({
        credentials: {
          email: this.email.value,
          password: this.password.value,
        },
      }),
    );
  }
}
