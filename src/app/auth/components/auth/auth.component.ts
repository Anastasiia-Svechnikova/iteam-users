import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CurrentPath } from '../../models/current-path';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  isRegister: boolean;
  form: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required]),
    rememberMe: new FormControl(false),
  });

  constructor(
    private router: Router,
    private authService: AuthService,
    public activatedRoute: ActivatedRoute,
  ) {
    this.isRegister =
      activatedRoute.snapshot.url[0].path === CurrentPath.Register;
  }

  onLogin(): void {
    if (this.form.valid) {
      if (this.isRegister) {
        this.authService.register(this.email.value, this.password.value).subscribe();
      } else {
        this.authService.login(this.email.value, this.password.value).subscribe();
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
