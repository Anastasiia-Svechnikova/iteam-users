import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { catchError, concatMap, map, Observable, of, switchMap } from 'rxjs';

import * as AuthActions from './actions';
import { AuthService } from '../services/auth.service';
import { ILoginResponseData } from '../models/login-response-data';
import { SnackbarService } from '../../shared/services/snackbar.service';
import { LocalService } from '../../shared/services/local.service';
import { loadUser } from '../../main/state/actions';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private snackbarService: SnackbarService,
    private router: Router,
    private localService: LocalService,
  ) {}

  login$: Observable<Action> = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.login),
      switchMap((action: ReturnType<typeof AuthActions.login>) =>
        this.authService.login(action.credentials).pipe(
          concatMap((loginResponseData: ILoginResponseData) => {
            this.snackbarService.openSnackBar('Login Successfully');
            this.localService.saveData(
              'accessToken',
              loginResponseData.tokens.accessToken,
            );
            this.router.navigateByUrl('');
            return [
              AuthActions.loginSuccess(),
              loadUser({ user: loginResponseData.user }),
            ];
          }),
          catchError((err) => {
            this.snackbarService.openSnackBar(
              `Login Failed: ${err.error.message}`,
            );
            return of(AuthActions.loginFail());
          }),
        ),
      ),
    );
  });

  register$: Observable<Action> = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.register),
      switchMap((action: ReturnType<typeof AuthActions.register>) =>
        this.authService.register(action.credentials).pipe(
          map(() => {
            this.snackbarService.openSnackBar('Register Success');
            this.router.navigateByUrl('login');
            return AuthActions.registerSuccess();
          }),
          catchError((err) => {
            this.snackbarService.openSnackBar(
              `Register Failed: ${err.error.message}`,
            );
            return of(AuthActions.registerFail());
          }),
        ),
      ),
    );
  });
}
