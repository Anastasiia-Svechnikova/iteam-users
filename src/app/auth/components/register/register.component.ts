import { ChangeDetectionStrategy, Component } from '@angular/core';

import { AbstractAuthComponent } from '../../auth-base/abstract-auth.component';
import { register } from '../../state/actions';

@Component({
  selector: 'app-register',
  templateUrl: '../../auth-base/auth.html',
  styleUrls: ['./register.component.scss', '../../auth-base/auth.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent extends AbstractAuthComponent {
  title = 'Sign Up';
  isRegister = true;
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
