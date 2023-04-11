import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';

import { IUserDetails } from 'src/app/shared/interfaces/user-details';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';
import { UserService } from '../services/user.service';
import { userActions } from './actions';

@Injectable()
export class UserEffects {
  loadCurrentUser$ = createEffect(() => {
    return this.actions.pipe(
      ofType(userActions.loadUserById),
      switchMap((action) => {
        return this.mainUserService.getUserById(action.id).pipe(
          map((user: IUserDetails) => userActions.loadedUser({ user })),

          catchError((error) => {
            this.snackbarService.openSnackBar(
              `User Loading Failed: ${error.message}`,
            );
            return of(userActions.loadedError());
          }),
        );
      }),
    );
  });

  constructor(
    private actions: Actions,
    private mainUserService: UserService,
    private snackbarService: SnackbarService,
  ) {}
}
