import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AuthComponent } from './components/auth/auth.component';
import { AuthService } from './services/auth.service';
import { AuthEffects } from './state/effects';
import { AuthReducer } from './state/reducer';

const routes: Routes = [
  {
    path: 'register',
    component: AuthComponent,
    data: {
      title: 'Sign Up',
      isRegister: true,
    },
  },
  {
    path: 'login',
    component: AuthComponent,
    data: {
      title: 'Sign In',
    },
  },
];

@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    RouterLink,
    MatSnackBarModule,
    MatCheckboxModule,
    StoreModule.forFeature('auth', AuthReducer),
    EffectsModule.forFeature([AuthEffects]),
    MatProgressSpinnerModule,
    MatIconModule,
    MatCardModule,
  ],
  providers: [AuthService],
})
export class AuthModule {}