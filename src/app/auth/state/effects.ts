import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { catchError, from, map, Observable, of, switchMap } from 'rxjs';

import {
  login,
  loginFail,
  loginSuccess,
  register,
  registerSuccess,
} from './actions';
import { AuthService } from '../services/auth.service';
import { ILoginResponseData } from '../models/user';
import { SnackbarService } from '../../shared/services/snackbar.service';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private snackbarService: SnackbarService,
    private router: Router,
  ) {}

  Login$: Observable<Action> = createEffect(() => {
    return this.actions$.pipe(
      ofType(login),
      switchMap((action: ReturnType<typeof login>) =>
        from(this.authService.login(action.email, action.password)).pipe(
          map((loginResponseData: ILoginResponseData) => {
            this.snackbarService.openSnackBar('Login Success');
            localStorage.setItem(
              'accessToken',
              loginResponseData.tokens.accessToken,
            );
            this.router.navigateByUrl('');
            return loginSuccess({ user: loginResponseData.user });
          }),
          catchError((err) => {
            this.snackbarService.openSnackBar(
              `Login Failed: ${err.error.message}`,
            );
            return of(loginFail());
          }),
        ),
      ),
    );
  });

  Register$: Observable<Action> = createEffect(() => {
    return this.actions$.pipe(
      ofType(register),
      switchMap((action: ReturnType<typeof register>) =>
        from(this.authService.register(action.email, action.password)).pipe(
          map(() => {
            this.snackbarService.openSnackBar('Register Success');
            this.router.navigateByUrl('login');
            return registerSuccess();
          }),
          catchError((err) => {
            this.snackbarService.openSnackBar(
              `Register Failed: ${err.error.message}`,
            );
            return of(loginFail());
          }),
        ),
      ),
    );
  });
}
